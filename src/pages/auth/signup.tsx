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
import { api } from "../../utils/api";

interface UserSignupDto {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

const SignUpPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [userDto, setUserDto] = useState<UserSignupDto>({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });
  const signup = api. .useMutation("auth.signup");
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleSingup = () => {
    signup.mutate(userDto);
  };

  return (
    <div className="flex justify-center">
      <div className="w-2/3 p-16">
        <h2 className="mt-5 text-center text-4xl font-semibold">
          Create an account
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
            placeholder="8==>---"
            type="text"
            value={userDto.email}
            onChange={(e) =>
              setUserDto((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <Input
            id="name"
            label="name"
            placeholder="name"
            type="text"
            containerClass="mt-6"
            value={userDto.name}
            onChange={(e) =>
              setUserDto((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
          <Input
            id="password"
            label="password"
            placeholder="supa secret"
            type="text"
            containerClass="mt-6"
            value={userDto.password}
            onChange={(e) =>
              setUserDto((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
          <Input
            id="confirm-password"
            label="confirm password"
            placeholder="supa secret"
            type="text"
            containerClass="mt-6"
            value=""
            onChange={() => {}}
          />
          <Button onClick={handleSingup} customClassName="mt-6">
            Sign up
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

export default SignUpPage;
