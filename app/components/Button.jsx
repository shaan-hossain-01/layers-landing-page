import { cva } from "class-variance-authority";

const classes = cva("border rounded-full h-12 px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
    size:{
      sm: "h-10"
    }
  },
});

export default function Button({ variant, size, className, children, ...props }) {
  return (
    <button className={classes({ variant, className, size })} {...props}>
      {children}
    </button>
  );
}
