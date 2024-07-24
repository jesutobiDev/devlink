import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

const page = () => {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-[100px] py-[50px] bg-dev-very-light-gray">
      <div className="flex flex-col gap-[50px] w-auto h-auto items-center" >
        <Logo />
        <LoginForm />
      </div>
    </main>
  )
}

export default page