import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  BlogPost: a
    .model({
      title: a.string().required(),
      slug: a.string().required(),
      content: a.string().required(),
      excerpt: a.string().required(),
      status: a.enum(['draft', 'published', 'archived']),
      publishedAt: a.datetime(),
      archivedAt: a.datetime(),
    })
    .secondaryIndexes((index) => [index('slug')])
    .authorization((allow) => [
      allow.publicApiKey().to(['read']),
      allow.group('ADMIN'),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
