import { Skeleton } from "../ui/skeleton";
//login signup resetpass verufyemail
export function LogIn() {
  return (
    <div className=" flex ">
      <div className="flex gap-3 flex-col">
        <Skeleton className="w-50 h-8 rounded-md" />
        <Skeleton className="w-104 h-8 rounded-md" />
        <Skeleton className="w-104 h-9 rounded-3" />
        <Skeleton className="w-104 h-9 rounded-3" />
        <div>
          <Skeleton className="w-50 h-8 rounded-md" />
          <Skeleton className="w-12 h-8 rounded-md" />
        </div>
      </div>
      <Skeleton className="w-203 h-300px" />
    </div>
  );
}
