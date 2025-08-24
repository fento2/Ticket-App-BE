import { prisma } from "../config/prisma";
import { ISignUpDto } from "../dto/auth.dto";
import { generateReferral } from "../utils/generateReferral";
import { hashPassword } from "../utils/hashPassword";
import dayjs from "dayjs";
import { PointType, RoleName } from "../../prisma/generated/prisma";

class AuthRepository {
  createUser = async (data: ISignUpDto) => {
    return await prisma.$transaction(async (tx) => {
      const { addReferral, ...userData } = data;
      const newUser = await tx.user.create({
        data: {
          ...userData,
          password: await hashPassword(data.password),
          referralCode: await generateReferral(data.username),
        },
      });

      if (addReferral) {
        const userReferrer = await tx.user.findUnique({
          where: {
            referralCode: addReferral,
          },
        });
        if (userReferrer) {
          await tx.referral.create({
            data: {
              referrerId: userReferrer.id,
              referredId: newUser.id,
            },
          });
          await tx.coupon.create({
            data: {
              discount: 10,
              userId: newUser.id,
              expiredAt: dayjs().add(3, "month").toDate(),
            },
          });
          await tx.point.create({
            data: {
              userId: userReferrer.id,
              amount: 10000,
              type: PointType.EARNED,
              expiredAt: dayjs().add(3, "month").toDate(),
            },
          });
        }
      }
      const roleCus = await tx.role.findUnique({
        where: { name: RoleName.CUSTOMER },
      });
      if (roleCus) {
        const roleUser = await tx.userRole.create({
          data: {
            userId: newUser.id,
            roleId: roleCus.id,
          },
          include: {
            role: true,
          },
        });
        return { newUser, role: roleUser.role.name };
      }
      return null;
    });
  };
}

export default AuthRepository;
