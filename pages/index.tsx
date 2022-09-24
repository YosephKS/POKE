import { Default } from 'components/layouts/Default';
import { NextPage } from 'next';
import { Mint } from "../src/components/templates/mint/index";


const MintPage: NextPage = () => {
    return (
        <Default pageName="Transactions">
            <Mint />
        </Default>
    )
}

export default MintPage;