// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqYHqr3pWfj21KAZNGZebV
// Component: dGzqDDBjcd9X

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

import Navbar from "../../Navbar"; // plasmic-import: X0bdkv4xmtEE/component
import FooterSection from "../../FooterSection"; // plasmic-import: pJ7Xt-Q9Heqm/component

import { useScreenVariants as useScreenVariantsd2PrltSkvuJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: d2prlt-skvuJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iqYHqr3pWfj21KAZNGZebV/projectcss
import sty from "./PlasmicPrivacyPolicy.module.css"; // plasmic-import: dGzqDDBjcd9X/css

import LockAltSvgrepoComSvgIcon from "./icons/PlasmicIcon__LockAltSvgrepoComSvg"; // plasmic-import: xF7ND7BM750t/icon
import DataCenterTableManagementSvgrepoComSvgIcon from "./icons/PlasmicIcon__DataCenterTableManagementSvgrepoComSvg"; // plasmic-import: kVGGY4-roWjH/icon
import HandshakeSvgrepoComSvgIcon from "./icons/PlasmicIcon__HandshakeSvgrepoComSvg"; // plasmic-import: VPcrDbZqojYk/icon

createPlasmicElementProxy;

export type PlasmicPrivacyPolicy__VariantMembers = {};
export type PlasmicPrivacyPolicy__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrivacyPolicy__VariantsArgs;
export const PlasmicPrivacyPolicy__VariantProps = new Array<VariantPropType>();

export type PlasmicPrivacyPolicy__ArgsType = {};
type ArgPropType = keyof PlasmicPrivacyPolicy__ArgsType;
export const PlasmicPrivacyPolicy__ArgProps = new Array<ArgPropType>();

export type PlasmicPrivacyPolicy__OverridesType = {
  root?: Flex__<"div">;
  pageBanner?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  columns?: Flex__<"div">;
  h1?: Flex__<"h1">;
  img?: Flex__<typeof PlasmicImg__>;
  mainSection?: Flex__<"div">;
  container3?: Flex__<"div">;
  footerSection?: Flex__<typeof FooterSection>;
};

export interface DefaultPrivacyPolicyProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPrivacyPolicy__RenderFunc(props: {
  variants: PlasmicPrivacyPolicy__VariantsArgs;
  args: PlasmicPrivacyPolicy__ArgsType;
  overrides: PlasmicPrivacyPolicy__OverridesType;
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
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
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <div className={classNames(projectcss.all, sty.freeBox___5DryB)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column___87M0)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ih9ZX)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Privacy Policy"}
                    </h1>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__dc520)}>
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "100%"
                        : "100%"
                    }
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "lazy"
                        : "lazy"
                    }
                    src={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? {
                            src: "/plasmic/blumemail_landing_website_new/images/corinneKutzTMi2R5NfoUnsplashJpg.jpg",
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                        : {
                            src: "/plasmic/blumemail_landing_website_new/images/tiffanyTertipesNxcs8Wwj9J0UnsplashJpg.jpg",
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                    }
                  />
                </div>
              </Stack__>
            </div>
          </div>
          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div
              data-plasmic-name={"container3"}
              data-plasmic-override={overrides.container3}
              className={classNames(projectcss.all, sty.container3)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iUjjG)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__gmFlt
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Quick Actions"}
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yZpVp
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                  }
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__al4EI)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__ptOmQ
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "End-To-End Encryption"}
                </h4>
                <div className={classNames(projectcss.all, sty.freeBox__kl3SN)}>
                  <LockAltSvgrepoComSvgIcon
                    className={classNames(projectcss.all, sty.svg__gj8Cl)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wI87E
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>
                        {"All emails sent throughout the Blumemail network "}
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"are"}
                      </span>
                      <React.Fragment>
                        {
                          " end-to-end encrypted. Contacting another Blumemail customer will result in that conversation being fully encrypted.\n"
                        }
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"If this did not answer your question:"}
                      </span>
                      <React.Fragment>
                        {
                          "\nEmails are be encrypted while they are stored on the email server, and encrypted in transit, they\u2019re encrypted with AES-GCM-256 \n"
                        }
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700, fontStyle: "italic" }}
                      >
                        {"NOTE"}
                      </span>
                      <React.Fragment>
                        {
                          ": Emails sent from the Blumemail network to a person not within the network may not result in proper end-to-end encryption."
                        }
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vBaX)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__d9Yf6
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Data We Collect"}
                </h4>
                <div className={classNames(projectcss.all, sty.freeBox__vfOp)}>
                  <DataCenterTableManagementSvgrepoComSvgIcon
                    className={classNames(projectcss.all, sty.svg__lUp4H)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__an7Qu
                    )}
                  >
                    {
                      "The data Blumemail collects about you is extremely generic and basic. But here are some specifics.\n\n1. Site Visits\nBlumemail keeps track of site visitors using Cloudflare nameservers, this is to monitor site traffic. We do not have information like IP Addresses, just countries of origin.\n2. Email Names & Number of Users\nBlumemail has access to the number of users within our own systems. We, however, do not have access to your personal data, including emails, calendar events, and other data.\u3164"
                    }
                  </div>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pjk)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__uLSwM
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Data Disclosure"}
                </h4>
                <div className={classNames(projectcss.all, sty.freeBox__kNcQh)}>
                  <HandshakeSvgrepoComSvgIcon
                    className={classNames(projectcss.all, sty.svg___6IhJ)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jGyZg
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>
                        {
                          "Blumemail is a company based in the United States. However, we do not carry personally identifying information about our users. The United States is part of the Five Eyes Alliance, and we as a company, respect this. Our emails and attachments are end-to-end encrypted. The only method of getting information is to reach out to the relevant email provider.\u3164\n\nThe only information we will have on record is the following:\n"
                        }
                      </React.Fragment>
                      {
                        <ul
                          className={classNames(
                            projectcss.all,
                            projectcss.ul,
                            sty.ul__kxPPp
                          )}
                        >
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__hk8T3
                            )}
                          >
                            {"Site Visits"}
                          </li>
                        </ul>
                      }
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <ul
                          className={classNames(
                            projectcss.all,
                            projectcss.ul,
                            sty.ul__h9I5E
                          )}
                        >
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__r5Q3I
                            )}
                          >
                            {"The Blumemail Network Address (email address)"}
                          </li>
                        </ul>
                      }
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <ul
                          className={classNames(
                            projectcss.all,
                            projectcss.ul,
                            sty.ul__ccNoP
                          )}
                        >
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__nAHhR
                            )}
                          >
                            {"Number or emails received or sent"}
                          </li>
                        </ul>
                      }
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {
                          "You can contact Cloudflare if you require IP Address records."
                        }
                      </span>
                    </React.Fragment>
                  </div>
                </div>
              </Stack__>
            </div>
          </div>
          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageBanner",
    "navbar",
    "columns",
    "h1",
    "img",
    "mainSection",
    "container3",
    "footerSection"
  ],
  pageBanner: ["pageBanner", "navbar", "columns", "h1", "img"],
  navbar: ["navbar"],
  columns: ["columns", "h1", "img"],
  h1: ["h1"],
  img: ["img"],
  mainSection: ["mainSection", "container3"],
  container3: ["container3"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageBanner: "div";
  navbar: typeof Navbar;
  columns: "div";
  h1: "h1";
  img: typeof PlasmicImg__;
  mainSection: "div";
  container3: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrivacyPolicy__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrivacyPolicy__VariantsArgs;
    args?: PlasmicPrivacyPolicy__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrivacyPolicy__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPrivacyPolicy__ArgsType,
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
          internalArgPropNames: PlasmicPrivacyPolicy__ArgProps,
          internalVariantPropNames: PlasmicPrivacyPolicy__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPrivacyPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrivacyPolicy";
  } else {
    func.displayName = `PlasmicPrivacyPolicy.${nodeName}`;
  }
  return func;
}

export const PlasmicPrivacyPolicy = Object.assign(
  // Top-level PlasmicPrivacyPolicy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageBanner: makeNodeComponent("pageBanner"),
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    mainSection: makeNodeComponent("mainSection"),
    container3: makeNodeComponent("container3"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicPrivacyPolicy
    internalVariantProps: PlasmicPrivacyPolicy__VariantProps,
    internalArgProps: PlasmicPrivacyPolicy__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPrivacyPolicy;
/* prettier-ignore-end */
