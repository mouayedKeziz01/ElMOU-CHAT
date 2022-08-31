import { Avatar, Box, Group, Text } from "@mantine/core";
export default function ConversationHeader({ user }) {

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        padding: theme.spacing.sm,
        borderRadius: theme.radius.md,
        cursor: "pointer",

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
      })}
    >
      <Group>
        <Avatar color="primary" radius="xl" src={user.photoURL}>
          {user.displayName.charAt(0)}
        </Avatar>

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {user.displayName}
          </Text>
        </div>
      </Group>
    </Box>
  );
}
