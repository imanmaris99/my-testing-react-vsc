import { ReactNode } from "react";


interface Props {
    className?: string;
    children: ReactNode;
    id?: string;
}


const Text = ({className, children, id} : Props) => {
  return (
    // <p id="testing" className="class-testing">
    //   {'testing element'}
    // </p>

    <p id={id} className={className}>
    {children}
    </p>
  )
}

export default Text;