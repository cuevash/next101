// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pHEc37smer1Q6xynjofQze
// Component: B_rjbW1b21_BN
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: CtOGPAYYB9Obua/component
import { useScreenVariants as useScreenVariantsv5FSi0UE2M7YwV } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: V5fSI0uE2M7ywV/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: pHEc37smer1Q6xynjofQze/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: B_rjbW1b21_BN/css
import ButtonArrowIcon from "./icons/PlasmicIcon__ButtonArrow"; // plasmic-import: jlA16urbNwYxya/icon
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg"; // plasmic-import: PUJ-tMkxMFdh63/icon

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsv5FSi0UE2M7YwV()
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
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___9GL9)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xByUv)}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/planty/images/promowebp.webp",
              fullWidth: 720,
              fullHeight: 525,
              aspectRatio: undefined
            }}
          />
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__e7Qio)}
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
            {"A new homeinterior for summer"}
          </h1>

          <h2
            data-plasmic-name={"h2"}
            data-plasmic-override={overrides.h2}
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2
            )}
          >
            {"from $149.99"}
          </h2>

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__u5Xv1)}>
              {true ? (
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__rKL
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uXqGv
                    )}
                  >
                    {"Discover"}
                  </div>

                  <ButtonArrowIcon
                    className={classNames(projectcss.all, sty.svg__naZp)}
                    role={"img"}
                  />
                </p.PlasmicLink>
              ) : null}
            </div>
          ) : null}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__s3GHc)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__iTln)}
        >
          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <MenuButton
              data-plasmic-name={"menuButton"}
              data-plasmic-override={overrides.menuButton}
              className={classNames("__wab_instance", sty.menuButton)}
            />
          ) : null}
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__jh2Vq)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__vx8A2
                )}
                component={Link}
                href={"/"}
                platform={"nextjs"}
              >
                <LogoWhitesvgIcon
                  className={classNames(projectcss.all, sty.svg__cgOim)}
                  role={"img"}
                />
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__c1LsG
                )}
                component={Link}
                href={"./store"}
                platform={"nextjs"}
              >
                {"Store"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__jCtlS
                )}
                component={Link}
                href={"./about"}
                platform={"nextjs"}
              >
                {"About"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__o6NyD
                )}
                component={Link}
                href={"./faq"}
                platform={"nextjs"}
              >
                {"Faq"}
              </p.PlasmicLink>
            </p.Stack>
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox__cnPpO)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__d5Wv8
              )}
            >
              {"© Company. All rights reserved. This site proudly built with "}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___9Djyc
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"Plasmic"}
            </p.PlasmicLink>
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "h1", "h2", "menuButton"],
  img: ["img"],
  h1: ["h1"],
  h2: ["h2"],
  menuButton: ["menuButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    menuButton: makeNodeComponent("menuButton"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
