// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqYHqr3pWfj21KAZNGZebV
// Component: RWMrzrBzvLwT

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
import sty from "./PlasmicDetailAbout2.module.css"; // plasmic-import: RWMrzrBzvLwT/css

createPlasmicElementProxy;

export type PlasmicDetailAbout2__VariantMembers = {};
export type PlasmicDetailAbout2__VariantsArgs = {};
type VariantPropType = keyof PlasmicDetailAbout2__VariantsArgs;
export const PlasmicDetailAbout2__VariantProps = new Array<VariantPropType>();

export type PlasmicDetailAbout2__ArgsType = {};
type ArgPropType = keyof PlasmicDetailAbout2__ArgsType;
export const PlasmicDetailAbout2__ArgProps = new Array<ArgPropType>();

export type PlasmicDetailAbout2__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  columns?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h5?: Flex__<"h5">;
  text?: Flex__<"div">;
};

export interface DefaultDetailAbout2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDetailAbout2__RenderFunc(props: {
  variants: PlasmicDetailAbout2__VariantsArgs;
  args: PlasmicDetailAbout2__ArgsType;
  overrides: PlasmicDetailAbout2__OverridesType;
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
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__nFknn)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/blumemail_landing_website_new/images/checklistPng.png",
                fullWidth: 48,
                fullHeight: 48,
                aspectRatio: undefined
              }}
            />
          </div>
          <div className={classNames(projectcss.all, sty.column__gOrsC)}>
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
                ? "Lorem ipsum sit amet"
                : "Lorem ipsum sit amet"}
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
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "columns", "img", "h5", "text"],
  freeBox: ["freeBox", "columns", "img", "h5", "text"],
  columns: ["columns", "img", "h5", "text"],
  img: ["img"],
  h5: ["h5"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  columns: "div";
  img: typeof PlasmicImg__;
  h5: "h5";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDetailAbout2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDetailAbout2__VariantsArgs;
    args?: PlasmicDetailAbout2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDetailAbout2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDetailAbout2__ArgsType,
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
          internalArgPropNames: PlasmicDetailAbout2__ArgProps,
          internalVariantPropNames: PlasmicDetailAbout2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDetailAbout2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDetailAbout2";
  } else {
    func.displayName = `PlasmicDetailAbout2.${nodeName}`;
  }
  return func;
}

export const PlasmicDetailAbout2 = Object.assign(
  // Top-level PlasmicDetailAbout2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h5: makeNodeComponent("h5"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDetailAbout2
    internalVariantProps: PlasmicDetailAbout2__VariantProps,
    internalArgProps: PlasmicDetailAbout2__ArgProps
  }
);

export default PlasmicDetailAbout2;
/* prettier-ignore-end */
