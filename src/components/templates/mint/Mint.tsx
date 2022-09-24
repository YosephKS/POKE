import { FC } from "react";
import { Button, Center, Flex, Text, Image, useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import axios from "axios";


const Mint: FC = () => {
    const { data } = useSession();
    const toast = useToast();

    const mintNFT = async () => {
        try {
            const response = await axios.post(
                "https://api.defender.openzeppelin.com/autotasks/4d02bdf3-5d65-4c75-bb0e-9bc4fafa45a5/runs/webhook/0fbbed21-c3f0-4410-ada7-3a12cf7526d2/RvP5U5ehawgRVRk1Hk7U7n",
                { to: data?.user?.address, tokenId: 4 }
            );
            console.log(response);
            const { status, data: result } = response ?? {};

            if (status === 200) {
                toast({
                    title: 'NFT Minted Successfully.',
                    description: `NFT Minted in ${result?.result}`,
                    status: 'success',
                    isClosable: true,
                })
            } else {
                toast({
                    title: 'NFT Mint Failed.',
                    description: "Please try again later.",
                    status: 'error',
                    isClosable: true,
                })
            }
        } catch (e) {
            toast({
                title: 'NFT Mint Failed.',
                description: "Please try again later.",
                status: 'error',
                isClosable: true,
            })
        }
    }

    return (
        <Center>
            <Flex direction="column" gap={5}>
                <Center>
                    <Text fontSize="4xl"><b>Mint Moralis NFT</b></Text>
                </Center>
                <Center>
                    <Image
                        borderRadius='15px'
                        boxSize='300px'
                        src='https://ipfs.io/ipfs/bafybeihuoxpcocsaxpgkatlxyyvrnlpieviw3e6kjz5ux2sr3x7xmwq44q/WhatsApp Image 2022-09-24 at 10.49.36 AM.jpeg'
                        alt='Dan Abramov'
                    />
                </Center>
                <Center>
                    <Button size="lg" onClick={mintNFT}>Mint NFT</Button>
                </Center>
            </Flex>
        </Center>
    )
};

export default Mint;