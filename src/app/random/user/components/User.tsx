import FetchedAt from "@/components/FetchedAt";
import { fetchData } from "@/utils/fetchData";
import maleIcon from "@/assets/icons/male.svg";
import femaleIcon from "@/assets/icons/female.svg";
import Image from "next/image";

async function User() {
  const {
    datetimeNow,
    ...data
  } = await fetchData("https://randomuser.me/api/");

  const [randomUser] = data?.results ?? [];
  const genderIcon = randomUser.gender === "male" ? maleIcon : femaleIcon;

  return (
    <>
      <div className="flex items-start gap-4 w-fit rounded-xl bg-zinc-900 p-6 text-zinc-100 shadow-lg border border-zinc-700">
        <div className="relative">
          <Image
            src={randomUser.picture.large}
            alt={randomUser.name.first}
            width={120}
            height={120}
            className="rounded-full border-2 border-zinc-700"
          />
          <div className="absolute -bottom-1 -right-1 rounded-full bg-zinc-800 p-1">
            <Image
              src={genderIcon.src}
              alt={randomUser.gender}
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex flex-col">
            <strong className="block text-lg font-semibold text-white">
              {randomUser.name.title}&nbsp;
              {randomUser.name.first}&nbsp;
              {randomUser.name.last}
            </strong>
            <strong className="block font-medium text-zinc-200 leading-none">
              @{randomUser.login.username}
            </strong>
          </div>

          <span className="text-sm text-zinc-400 mt-1">
            Email:&nbsp;
            <strong className="font-medium text-zinc-200">
              {randomUser.email}
            </strong>
          </span>

          <span className="text-sm text-zinc-400">
            Age:&nbsp;
            <strong className="font-medium text-zinc-200">
              {randomUser.dob.age}
            </strong>
          </span>
        </div>
      </div>

      <FetchedAt datetimeNow={datetimeNow} />
    </>
  );
}

export default User;
