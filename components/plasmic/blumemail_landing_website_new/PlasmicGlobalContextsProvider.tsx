// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqYHqr3pWfj21KAZNGZebV

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { useScreenVariants as useScreenVariantsd2PrltSkvuJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: d2prlt-skvuJ/globalVariant

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, antdConfigProviderProps } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsd2PrltSkvuJ()
  });

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#1677ff"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : hasVariant(globalVariants, "screen", "mobileOnly")
          ? {
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "27px",
              color: "#00000080",
              letterSpacing: "normal"
            }
          : true
          ? {
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "500",
              lineHeight: "1.5",
              color: "#00000080",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      {children}
    </AntdConfigProvider>
  );
}