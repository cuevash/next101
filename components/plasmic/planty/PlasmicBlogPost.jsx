// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pHEc37smer1Q6xynjofQze
// Component: jeBG2EE2oYolA-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: pHEc37smer1Q6xynjofQze/projectcss
import sty from "./PlasmicBlogPost.module.css"; // plasmic-import: jeBG2EE2oYolA-/css

export const PlasmicBlogPost__VariantProps = new Array("long");

export const PlasmicBlogPost__ArgProps = new Array(
  "title",
  "description",
  "image",
  "author"
);

function PlasmicBlogPost__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <p.Stack
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
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootlong]: hasVariant(variants, "long", "long") }
      )}
    >
      {(hasVariant(variants, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__i68Yi, {
            [sty.freeBoxlong__i68YIaFZpZ]: hasVariant(variants, "long", "long")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___4TwBq)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                src={{
                  src: "/plasmic/planty/images/b1.jpeg",
                  fullWidth: 370,
                  fullHeight: 250,
                  aspectRatio: undefined
                }}
              />
            ),

            value: args.image
          })}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__aAs86, {
          [sty.freeBoxlong__aAs86AFZpZ]: hasVariant(variants, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Why Brands are Looking at Local Language",
          value: args.title,
          className: classNames(sty.slotTargetTitle, {
            [sty.slotTargetTitlelong]: hasVariant(variants, "long", "long")
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents: "By Robert Norby / 18th March 2018",
          value: args.author,
          className: classNames(sty.slotTargetAuthor)
        })}

        {p.renderPlasmicSlot({
          defaultContents:
            "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescriptionlong]: hasVariant(
              variants,
              "long",
              "long"
            )
          })
        })}
      </p.Stack>
    </p.Stack>
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
      internalArgPropNames: PlasmicBlogPost__ArgProps,
      internalVariantPropNames: PlasmicBlogPost__VariantProps
    });

    return PlasmicBlogPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogPost";
  } else {
    func.displayName = `PlasmicBlogPost.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogPost = Object.assign(
  // Top-level PlasmicBlogPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBlogPost
    internalVariantProps: PlasmicBlogPost__VariantProps,
    internalArgProps: PlasmicBlogPost__ArgProps
  }
);

export default PlasmicBlogPost;
/* prettier-ignore-end */
