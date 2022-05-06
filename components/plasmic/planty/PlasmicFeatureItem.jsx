// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pHEc37smer1Q6xynjofQze
// Component: zao5vJN0LZKBgA
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: qQDmv-FaPz2qGj/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: pHEc37smer1Q6xynjofQze/projectcss
import sty from "./PlasmicFeatureItem.module.css"; // plasmic-import: zao5vJN0LZKBgA/css

export const PlasmicFeatureItem__VariantProps = new Array();

export const PlasmicFeatureItem__ArgProps = new Array();

function PlasmicFeatureItem__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
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
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__vobRw)}>
        <div className={classNames(projectcss.all, sty.freeBox__gliop)} />

        <div className={classNames(projectcss.all, sty.freeBox__qvWkN)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___2Hd5G)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0JW74
              )}
            >
              {"Unlimited Table Collection"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1MXf
              )}
            >
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
              }
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__msLDh)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__d8AFn
                )}
              >
                {"Starting from"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5FyFl
                )}
              >
                {" $399"}
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pr3U3)}
            >
              <LinkButton
                data-plasmic-name={"linkButton"}
                data-plasmic-override={overrides.linkButton}
                className={classNames("__wab_instance", sty.linkButton)}
                text={"View More"}
                type={"solidOrange"}
              />
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "linkButton"],
  linkButton: ["linkButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatureItem__ArgProps,
      internalVariantPropNames: PlasmicFeatureItem__VariantProps
    });

    return PlasmicFeatureItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureItem";
  } else {
    func.displayName = `PlasmicFeatureItem.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureItem = Object.assign(
  // Top-level PlasmicFeatureItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),
    // Metadata about props expected for PlasmicFeatureItem
    internalVariantProps: PlasmicFeatureItem__VariantProps,
    internalArgProps: PlasmicFeatureItem__ArgProps
  }
);

export default PlasmicFeatureItem;
/* prettier-ignore-end */
