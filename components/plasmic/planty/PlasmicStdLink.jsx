// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pHEc37smer1Q6xynjofQze
// Component: ywNTGiBA0r
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: pHEc37smer1Q6xynjofQze/projectcss
import sty from "./PlasmicStdLink.module.css"; // plasmic-import: ywNTGiBA0r/css

export const PlasmicStdLink__VariantProps = new Array();

export const PlasmicStdLink__ArgProps = new Array("linkTo");

function PlasmicStdLink__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={args.linkTo}
      platform={"nextjs"}
    >
      {"Faq"}
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicStdLink__ArgProps,
      internalVariantPropNames: PlasmicStdLink__VariantProps
    });

    return PlasmicStdLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStdLink";
  } else {
    func.displayName = `PlasmicStdLink.${nodeName}`;
  }
  return func;
}

export const PlasmicStdLink = Object.assign(
  // Top-level PlasmicStdLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicStdLink
    internalVariantProps: PlasmicStdLink__VariantProps,
    internalArgProps: PlasmicStdLink__ArgProps
  }
);

export default PlasmicStdLink;
/* prettier-ignore-end */