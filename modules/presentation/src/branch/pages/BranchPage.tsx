import React from 'react';
import { Typography } from '@genossys-erp/ui/components/typography';
import { Button } from '@genossys-erp/ui/components/button';
import { LuCirclePlus } from '@genossys-erp/ui/icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@genossys-erp/ui/components/dialog';

const BranchPage: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography variant="large" className="text-neutral-700">
            Branch
          </Typography>
          <Typography
            variant="small"
            className="text-xs font-light text-neutral-500"
          >
            Manage branch data
          </Typography>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button prefixIcon={LuCirclePlus}>Create New Branch</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Branch</DialogTitle>
              <DialogDescription>
                Fill in the information below to add a new branch to your system.
              </DialogDescription>
            </DialogHeader>
            <div className="py-8 text-center border-2 border-dashed border-neutral-100 rounded-lg bg-stone-50/50 mb-4">
              <Typography variant="small" className="text-neutral-400 italic">
                Form fields for branch data will be here...
              </Typography>
            </div>
            <DialogFooter>
              <DialogClose>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>
              <Button>Save Branch</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BranchPage;
