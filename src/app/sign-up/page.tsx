import Logo from "../components/Logo";
import SignUpForm from "../components/SignUpForm";

const page = () => {
  return (
    <main className="flex h-svh flex-col items-center justify-center px-[100px] py-[50px] bg-dev-very-light-gray">
      <div className="flex flex-col gap-[50px] w-auto h-auto items-center" >
        <Logo />
        <SignUpForm />
      </div>
    </main>
  )
}

export default page