import {mergeProps} from "@react-aria/utils";
import {forwardRef} from "@nextui-org/system";
import {__DEV__} from "@nextui-org/shared-utils";

import {UseLinkProps, useLink} from "./use-link";
import {LinkIcon} from "./link-icon";

export interface LinkProps extends UseLinkProps {}

const Link = forwardRef<LinkProps, "a">((props, ref) => {
  const {
    Component,
    domRef,
    styles,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon />,
    linkProps,
    ...otherProps
  } = useLink({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...mergeProps(linkProps, otherProps)}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

if (__DEV__) {
  Link.displayName = "NextUI.Link";
}

export default Link;