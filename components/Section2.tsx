// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicSection2,
  DefaultSection2Props
} from "./plasmic/blumemail_landing_website_new/PlasmicSection2";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface Section2Props extends Omit<DefaultSection2Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultSection2Props altogether and have
// total control over the props for your component.
export interface Section2Props extends DefaultSection2Props {}

function Section2_(props: Section2Props, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicSection2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicSection2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all Section2Props here, but feel free
  // to do whatever works for you.

  return <PlasmicSection2 root={{ ref }} {...props} />;
}

const Section2 = React.forwardRef(Section2_);
export default Section2;
