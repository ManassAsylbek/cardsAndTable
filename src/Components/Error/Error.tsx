import React, {FC} from 'react';
import {Alert, Button} from 'antd';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Link} from "react-router-dom";

interface errorProps {
    text: string
}

const Error: FC<errorProps> = ({text}) => {
    return (
        <div className="errorWrapper">
            <Alert
                message="Error"
                description={text}
                type="error"
                showIcon
                action={
                    <Link to="/">
                        <Button danger>
                            Вернутся
                        </Button>
                    </Link>}
            />

        </div>
    );
};

export default Error;