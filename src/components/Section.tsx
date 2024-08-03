import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  title: string
}

function Section(props: SectionProps) {
  return (
    <div id={props.title} className="row mb-3">
        <h1>{props.title}</h1>
        {props.children}
    </div>
  );
}

export default Section;
