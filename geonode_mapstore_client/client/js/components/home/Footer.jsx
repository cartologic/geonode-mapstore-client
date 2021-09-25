/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import { Nav } from 'react-bootstrap-v1';
import Message from '@mapstore/framework/components/I18N/Message';
import {
    readProperty,
    filterMenuItems
} from '@js/utils/MenuUtils';

function FooterItem({
    state,
    item
}) {
    const { type, label, labelId = '', href } = item;
    if (type === 'link') {
        return (
            <Nav.Link href={readProperty(state, href)}>{labelId && <Message msgId={labelId}/> || label}</Nav.Link>
        );
    }
    return null;
}

const Footer = forwardRef(({
    footerItems,
    footerCopyright,
    footerRightItems,
    user,
    style
}, ref) => {
    const state = {
        user
    };
    const rightItems = [
        {
            lableId: "gnhome.contactUs",
            href: "/contact-us/"
        },
        {
            lableId: "gnhome.browseCategories",
            href: "/categories/"
        }
    ];
    return (
        <footer
            ref={ref}
            className="gn-footer"
            style={style}
        >
            <ul>
                {
                    footerItems
                    .filter((item) => filterMenuItems(state, item))
                    .map((item, idx) => {
                        return (
                            <li key={idx}>
                                <FooterItem
                                    item={{ ...item, id: item.id || idx }}
                                    state={state}
                                />
                            </li>
                        );
                    })
                }
            </ul>
            <span className="copyRight">
                {footerCopyright}
                <a href="http://cartologic.com/">
                    <span className="companyName">Cartologic</span>
                </a>
            </span>
            <ul className="contact-us">
                {
                    footerRightItems.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <FooterItem
                                    item={{ ...item, id: item.id || idx }}
                                    state={state}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </footer>
    );
});

Footer.defaultProps = {
    footerItems: [],
    footerCopyright: '',
    footerRightItems: []
};

export default Footer;
