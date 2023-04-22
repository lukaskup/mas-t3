import {
  getProviders,
  signIn,
  getCsrfToken,
  useSession,
} from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CtxOrReq } from "next-auth/client/_utils";
import { Input } from "../../components/UI/Input";
import Link from "next/link";
import { Button } from "../../components/UI/Button";

interface UserLoginDto {
  email: string;
  password: string;
}

const SignInPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [userLoginDto, setUserLoginDto] = useState<UserLoginDto>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="flex justify-center">
      <div className="w-2/3 p-16">
        <h2 className="mt-5 text-center text-4xl font-semibold">
          Sign in to your account
        </h2>
        <div className="mt-2 text-center text-sm font-medium">
          or{" "}
          <Link href="/auth/signin">
            <span className="cursor-pointer text-slate-300/90 underline">
              sign in
            </span>
          </Link>{" "}
          if you already have an account
        </div>
        <div className="mt-10 border border-slate-300/10 p-12">
          <Input
            id="email"
            label="email"
            placeholder="email"
            type="text"
            value={userLoginDto.email}
            onChange={(e: any) =>
              setUserLoginDto((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <Input
            id="password"
            label="password"
            placeholder="supa secret"
            type="text"
            containerClass="mt-6"
            value={userLoginDto.password}
            onChange={(e: any) =>
              setUserLoginDto((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
          <Button
            onClick={async () => {
              const res = await signIn("credentials", {
                email: userLoginDto.email,
                password: userLoginDto.password,
              });
            }}
            customClassName="mt-6"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: { providers, csrfToken },
  };
};

export default SignInPage;
