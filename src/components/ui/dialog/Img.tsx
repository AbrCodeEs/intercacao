import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ImgDialog = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <Dialog>
    <DialogTrigger>{children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <DialogDescription>{children}</DialogDescription>
    </DialogContent>
  </Dialog>
);

export default ImgDialog;
