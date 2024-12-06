// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqYHqr3pWfj21KAZNGZebV
// Component: zDHt8RNREuHR

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsd2PrltSkvuJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: d2prlt-skvuJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iqYHqr3pWfj21KAZNGZebV/projectcss
import sty from "./PlasmicDiagramCard.module.css"; // plasmic-import: zDHt8RNREuHR/css

createPlasmicElementProxy;

export type PlasmicDiagramCard__VariantMembers = {};
export type PlasmicDiagramCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicDiagramCard__VariantsArgs;
export const PlasmicDiagramCard__VariantProps = new Array<VariantPropType>();

export type PlasmicDiagramCard__ArgsType = {};
type ArgPropType = keyof PlasmicDiagramCard__ArgsType;
export const PlasmicDiagramCard__ArgProps = new Array<ArgPropType>();

export type PlasmicDiagramCard__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  h5?: Flex__<"h5">;
  text?: Flex__<"div">;
};

export interface DefaultDiagramCardProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDiagramCard__RenderFunc(props: {
  variants: PlasmicDiagramCard__VariantsArgs;
  args: PlasmicDiagramCard__ArgsType;
  overrides: PlasmicDiagramCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsd2PrltSkvuJ()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <h5
          data-plasmic-name={"h5"}
          data-plasmic-override={overrides.h5}
          className={classNames(
            projectcss.all,
            projectcss.h5,
            projectcss.__wab_text,
            sty.h5
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Lorem Ipsum"
            : "Connect your domain for free."}
        </h5>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            : "With Blumemail, you can connect your domain for free. So that means you have the option to have that @blumemail.net domain or not. Your choice. \ud83d\ude42"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h5", "text"],
  freeBox: ["freeBox", "h5", "text"],
  h5: ["h5"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h5: "h5";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDiagramCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDiagramCard__VariantsArgs;
    args?: PlasmicDiagramCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDiagramCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDiagramCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDiagramCard__ArgProps,
          internalVariantPropNames: PlasmicDiagramCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDiagramCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDiagramCard";
  } else {
    func.displayName = `PlasmicDiagramCard.${nodeName}`;
  }
  return func;
}

export const PlasmicDiagramCard = Object.assign(
  // Top-level PlasmicDiagramCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h5: makeNodeComponent("h5"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDiagramCard
    internalVariantProps: PlasmicDiagramCard__VariantProps,
    internalArgProps: PlasmicDiagramCard__ArgProps
  }
);

export default PlasmicDiagramCard;
/* prettier-ignore-end */
