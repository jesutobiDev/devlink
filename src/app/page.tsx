"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import EmptyLink from "./components/EmptyLink";
import LinkItem from "./components/LinkItem";


export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="h-auto flex-1 bg-white rounded-xl pt-7 flex flex-col gap-7">
      <div className="flex flex-col gap-2  px-7 ">
        <p className="text-[32px] font-bold text-[#333333]">
          Customize your links
        </p>
        <p className="text-base text-[#737373]">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div className="flex flex-col gap-7  px-7 ">
        <button className="button-secondary-default hover:button-secondary-active py-3 font-semibold text-lg cursor-pointer">+ Add new link</button>
        {/* <EmptyLink /> */}
        <LinkItem/>
      </div>
      <div className="border-t border-dev-light-gray px-3 py-5 flex items-center justify-end">
          <button className="button-primary-disabled py-3 px-7 self-end">Save</button>
        </div>
    </main>
  );
}
