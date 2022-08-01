// import { AppShell, Navbar, Header, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core';

export const Dashboard = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <AppShell
                styles={{
                    main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                        <Text>Application navbar</Text>
                    </Navbar>
                }
                aside={
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                            <Text>Application sidebar</Text>
                        </Aside>
                    </MediaQuery>
                }
                footer={
                    <Footer height={60} p="md">
                        Application footer
                    </Footer>
                }
                header={
                    <Header height={70} p="md">
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>

                            <Text>Application header</Text>
                        </div>
                    </Header>
                }
            >
                <Text>Resize app to see responsive navbar in action</Text>
            </AppShell>
            {/* <AppShell
                styles={{
                    main: {
                        background: theme.colors.dark[8],
                        // background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    },
                }}
                navbar={<Navbar width={{ base: 300 }} height={500} p="xs">
                    <Navbar.Section>First</Navbar.Section>
                    <Navbar.Section grow>Grow section</Navbar.Section>

                    {/* Last section with normal height (depends on section content) */}
            {/* <Navbar.Section>Last section</Navbar.Section> */}
            {/* </Navbar>}
            >
                <div>hi</div>
            </AppShell> */}
        </div >
    )
}