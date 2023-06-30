import { Card, CardBody, CardFooter, Center, Flex, Image, Text } from "@chakra-ui/react";
import { CardOptions } from "../../interface/Interface";

export const CardComponent = (cardOptions: CardOptions) => {
    return (
        <Center mt={5}
        >
            <Flex justify="center"

                flexDirection="column" alignItems="center">
                <Card
                    border='1px solid #EEEEEE'

                >
                    <CardBody
                        mb='-5'
                    >
                        <Center my={3}>
                            <Image
                                boxSize="50px"
                                objectFit="contain"
                                src={cardOptions.icon}
                            />
                        </Center>
                        <Text
                            fontWeight='700'
                            fontSize='20px'
                            lineHeight='24px'
                            width='250px'
                            textAlign="center">{cardOptions.title}</Text>
                    </CardBody>
                    <CardFooter
                        mb={3}
                        display='flex'
                        flexDirection='column'
                        alignItems="center"
                    >
                        <Text
                            color='#03A84E'
                            fontWeight='500'

                        >{cardOptions.totalArticle} articles</Text>
                        <Text
                            color='#9C9AA6'
                        >Last updated {cardOptions.updateTime}</Text>
                    </CardFooter>
                </Card>
            </Flex>
        </Center>
    );
};
