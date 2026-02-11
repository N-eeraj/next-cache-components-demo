import FetchedAt from "@/components/FetchedAt";
import { fetchData } from "@/utils/fetchData";
import maleIcon from "@/assets/icons/male.svg";
import femaleIcon from "@/assets/icons/female.svg";
import Image from "next/image";

async function User() {
  const {
    datetimeNow,
    ...data
  } = await fetchData(`${process.env.NEXT_APP_URL}/api/random-user`, 1500);

  const genderIcon = data.data.gender === "male" ? maleIcon : femaleIcon;

  return (
    <>
      <div className="flex items-start gap-4 w-fit rounded-xl bg-zinc-900 p-6 text-zinc-100 shadow-lg border border-zinc-700">
        <div className="relative">
          <Image
            src={data.data.picture}
            alt={data.data.name.first}
            width={120}
            height={120}
            className="rounded-full border-2 border-zinc-700"
          />
          <div className="absolute -bottom-1 -right-1 rounded-full bg-zinc-800 p-1">
            <Image
              src={genderIcon.src}
              alt={data.data.gender}
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex flex-col">
            <strong className="block text-lg font-semibold text-white">
              {data.data.name.title}&nbsp;
              {data.data.name.first}&nbsp;
              {data.data.name.last}
            </strong>
            <strong className="block font-medium text-zinc-200 leading-none">
              @{data.data.login.username}
            </strong>
          </div>

          <span className="text-sm text-zinc-400 mt-1">
            Email:&nbsp;
            <strong className="font-medium text-zinc-200">
              {data.data.email}
            </strong>
          </span>

          <span className="text-sm text-zinc-400">
            Age:&nbsp;
            <strong className="font-medium text-zinc-200">
              {data.data.dob.age}
            </strong>
          </span>
        </div>
      </div>

      <FetchedAt datetimeNow={datetimeNow} />
    </>
  );
}

export default User;
