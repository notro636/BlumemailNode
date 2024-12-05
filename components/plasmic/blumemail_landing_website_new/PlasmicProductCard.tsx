// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqYHqr3pWfj21KAZNGZebV
// Component: 0HkxE5m16msS

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

import projectcss from "./plasmic.module.css"; // plasmic-import: iqYHqr3pWfj21KAZNGZebV/projectcss
import sty from "./PlasmicProductCard.module.css"; // plasmic-import: 0HkxE5m16msS/css

createPlasmicElementProxy;

export type PlasmicProductCard__VariantMembers = {};
export type PlasmicProductCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductCard__VariantsArgs;
export const PlasmicProductCard__VariantProps = new Array<VariantPropType>();

export type PlasmicProductCard__ArgsType = {};
type ArgPropType = keyof PlasmicProductCard__ArgsType;
export const PlasmicProductCard__ArgProps = new Array<ArgPropType>();

export type PlasmicProductCard__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h3?: Flex__<"h3">;
  text?: Flex__<"div">;
};

export interface DefaultProductCardProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProductCard__RenderFunc(props: {
  variants: PlasmicProductCard__VariantsArgs;
  args: PlasmicProductCard__ArgsType;
  overrides: PlasmicProductCard__OverridesType;
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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "50px" : "100%"
          }
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/blumemail_landing_website_new/images/productImgPng.png",
            fullWidth: 100,
            fullHeight: 100,
            aspectRatio: undefined
          }}
        />

        <h3
          data-plasmic-name={"h3"}
          data-plasmic-override={overrides.h3}
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Lorem ipsum dolor sit amet"
            : "Lorem ipsum dolor sit amet"}
        </h3>
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
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img", "h3", "text"],
  freeBox: ["freeBox", "img", "h3", "text"],
  img: ["img"],
  h3: ["h3"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  img: typeof PlasmicImg__;
  h3: "h3";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCard__VariantsArgs;
    args?: PlasmicProductCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductCard__ArgsType,
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
          internalArgPropNames: PlasmicProductCard__ArgProps,
          internalVariantPropNames: PlasmicProductCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
