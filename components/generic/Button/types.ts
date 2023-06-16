import React, { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode
} & React.ComponentPropsWithoutRef<'button'>
