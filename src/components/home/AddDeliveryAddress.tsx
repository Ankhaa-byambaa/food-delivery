import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddDeliveryAddress() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="h-" variant="outline">
            <img className="h-4" src="Location Icon.png" />
            <p className="text-[12px] text-red-500 text-nowrap">
              Delivery address
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Please write your delivery address!</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input
                id="name-1"
                name="name"
                placeholder="Please share your complete address"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Deliver Here</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
