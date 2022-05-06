// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pHEc37smer1Q6xynjofQze
// Component: Tv1TEamQVURUK
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
import IconLink from "../../IconLink"; // plasmic-import: _hIENuO1SpcnPD/component
import LinkButton from "../../LinkButton"; // plasmic-import: qQDmv-FaPz2qGj/component
import { useScreenVariants as useScreenVariantsv5FSi0UE2M7YwV } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: V5fSI0uE2M7ywV/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: pHEc37smer1Q6xynjofQze/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: Tv1TEamQVURUK/css
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg"; // plasmic-import: PUJ-tMkxMFdh63/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: IIn6MGA5PzbO9M/icon

export const PlasmicHeader__VariantProps = new Array("expanded");

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
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
        sty.root,
        { [sty.rootexpanded]: hasVariant(variants, "expanded", "expanded") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jcvtY)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButtonexpanded]: hasVariant(
                variants,
                "expanded",
                "expanded"
              )
            })}
            expanded={
              hasVariant(variants, "expanded", "expanded") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : undefined
            }
          />
        ) : null}
        {true ? (
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__gUrBh
            )}
            component={Link}
            href={"/plasmic/home"}
            platform={"nextjs"}
          >
            <LogoWhitesvgIcon
              a={""}
              className={classNames(projectcss.all, sty.svg__fkYoz)}
              role={"img"}
            />
          </p.PlasmicLink>
        ) : null}
        {(
          hasVariant(variants, "expanded", "expanded") &&
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "mobile")
            ? true
            : true
        ) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__nPA, {
              [sty.freeBoxexpanded__nPAhDxN0]: hasVariant(
                variants,
                "expanded",
                "expanded"
              )
            })}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__vcZu4
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
                sty.link__riU6
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
                sty.link___7Wewr
              )}
              component={Link}
              href={"./faq"}
              platform={"nextjs"}
            >
              {"Faq"}
            </p.PlasmicLink>
          </p.Stack>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__iHhxF)}
        >
          <IconLink
            data-plasmic-name={"iconLink"}
            data-plasmic-override={overrides.iconLink}
            className={classNames("__wab_instance", sty.iconLink)}
            icon={
              <React.Fragment>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___6I6Bo)}
                  role={"img"}
                />

                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"0"}
                </div>
              </React.Fragment>
            }
          />
        </p.Stack>
      </p.Stack>

      {(
        hasVariant(variants, "expanded", "expanded") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__wOzkD, {
            [sty.freeBoxexpanded__wOzkDhDxN0]: hasVariant(
              variants,
              "expanded",
              "expanded"
            )
          })}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__lpCc1)}
            text={"Home"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__qjHoc)}
            text={"New Arrival"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__y7Bk1)}
            text={"Features"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton___5XOzP)}
            text={"Blog"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__qeVvr)}
            text={"Contact"}
            type={"blankGray"}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
