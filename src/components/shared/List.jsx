import React, { Fragment } from 'react';

export const List = ({ list, children: Children }) => {
    return (
        <Fragment>
            {
                list.map(item => (
                    <Fragment key={item.id}>
                          <Children data={item} />
                    </Fragment>
                ))
            }
        </Fragment>
    );
};
