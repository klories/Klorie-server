// Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateFood {
  count: Int!
}

type AggregateMineral {
  count: Int!
}

type AggregateProximate {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVitamin {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Food {
  id: ID!
  foodGroupId: ID!
  itemNumber: Int!
  description: String!
  energy: Float
  proximate: Proximate!
  mineral: Mineral!
  vitamin: Vitamin!
  saltEquivalents: Float
  alcohol: Float
  nitrateIon: Float
  theobromine: Float
  caffeine: Float
  tannin: Float
  polyphenol: Float
  aceticAcid: Float
  cookingOil: Float
  organicAcids: Float
}

type FoodConnection {
  pageInfo: PageInfo!
  edges: [FoodEdge]!
  aggregate: AggregateFood!
}

input FoodCreateInput {
  foodGroupId: ID!
  itemNumber: Int!
  description: String!
  energy: Float
  proximate: ProximateCreateOneInput!
  mineral: MineralCreateOneInput!
  vitamin: VitaminCreateOneInput!
  saltEquivalents: Float
  alcohol: Float
  nitrateIon: Float
  theobromine: Float
  caffeine: Float
  tannin: Float
  polyphenol: Float
  aceticAcid: Float
  cookingOil: Float
  organicAcids: Float
}

type FoodEdge {
  node: Food!
  cursor: String!
}

enum FoodOrderByInput {
  id_ASC
  id_DESC
  foodGroupId_ASC
  foodGroupId_DESC
  itemNumber_ASC
  itemNumber_DESC
  description_ASC
  description_DESC
  energy_ASC
  energy_DESC
  saltEquivalents_ASC
  saltEquivalents_DESC
  alcohol_ASC
  alcohol_DESC
  nitrateIon_ASC
  nitrateIon_DESC
  theobromine_ASC
  theobromine_DESC
  caffeine_ASC
  caffeine_DESC
  tannin_ASC
  tannin_DESC
  polyphenol_ASC
  polyphenol_DESC
  aceticAcid_ASC
  aceticAcid_DESC
  cookingOil_ASC
  cookingOil_DESC
  organicAcids_ASC
  organicAcids_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FoodPreviousValues {
  id: ID!
  foodGroupId: ID!
  itemNumber: Int!
  description: String!
  energy: Float
  saltEquivalents: Float
  alcohol: Float
  nitrateIon: Float
  theobromine: Float
  caffeine: Float
  tannin: Float
  polyphenol: Float
  aceticAcid: Float
  cookingOil: Float
  organicAcids: Float
}

type FoodSubscriptionPayload {
  mutation: MutationType!
  node: Food
  updatedFields: [String!]
  previousValues: FoodPreviousValues
}

input FoodSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FoodWhereInput
  AND: [FoodSubscriptionWhereInput!]
  OR: [FoodSubscriptionWhereInput!]
  NOT: [FoodSubscriptionWhereInput!]
}

input FoodUpdateInput {
  foodGroupId: ID
  itemNumber: Int
  description: String
  energy: Float
  proximate: ProximateUpdateOneRequiredInput
  mineral: MineralUpdateOneRequiredInput
  vitamin: VitaminUpdateOneRequiredInput
  saltEquivalents: Float
  alcohol: Float
  nitrateIon: Float
  theobromine: Float
  caffeine: Float
  tannin: Float
  polyphenol: Float
  aceticAcid: Float
  cookingOil: Float
  organicAcids: Float
}

input FoodUpdateManyMutationInput {
  foodGroupId: ID
  itemNumber: Int
  description: String
  energy: Float
  saltEquivalents: Float
  alcohol: Float
  nitrateIon: Float
  theobromine: Float
  caffeine: Float
  tannin: Float
  polyphenol: Float
  aceticAcid: Float
  cookingOil: Float
  organicAcids: Float
}

input FoodWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  foodGroupId: ID
  foodGroupId_not: ID
  foodGroupId_in: [ID!]
  foodGroupId_not_in: [ID!]
  foodGroupId_lt: ID
  foodGroupId_lte: ID
  foodGroupId_gt: ID
  foodGroupId_gte: ID
  foodGroupId_contains: ID
  foodGroupId_not_contains: ID
  foodGroupId_starts_with: ID
  foodGroupId_not_starts_with: ID
  foodGroupId_ends_with: ID
  foodGroupId_not_ends_with: ID
  itemNumber: Int
  itemNumber_not: Int
  itemNumber_in: [Int!]
  itemNumber_not_in: [Int!]
  itemNumber_lt: Int
  itemNumber_lte: Int
  itemNumber_gt: Int
  itemNumber_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  energy: Float
  energy_not: Float
  energy_in: [Float!]
  energy_not_in: [Float!]
  energy_lt: Float
  energy_lte: Float
  energy_gt: Float
  energy_gte: Float
  proximate: ProximateWhereInput
  mineral: MineralWhereInput
  vitamin: VitaminWhereInput
  saltEquivalents: Float
  saltEquivalents_not: Float
  saltEquivalents_in: [Float!]
  saltEquivalents_not_in: [Float!]
  saltEquivalents_lt: Float
  saltEquivalents_lte: Float
  saltEquivalents_gt: Float
  saltEquivalents_gte: Float
  alcohol: Float
  alcohol_not: Float
  alcohol_in: [Float!]
  alcohol_not_in: [Float!]
  alcohol_lt: Float
  alcohol_lte: Float
  alcohol_gt: Float
  alcohol_gte: Float
  nitrateIon: Float
  nitrateIon_not: Float
  nitrateIon_in: [Float!]
  nitrateIon_not_in: [Float!]
  nitrateIon_lt: Float
  nitrateIon_lte: Float
  nitrateIon_gt: Float
  nitrateIon_gte: Float
  theobromine: Float
  theobromine_not: Float
  theobromine_in: [Float!]
  theobromine_not_in: [Float!]
  theobromine_lt: Float
  theobromine_lte: Float
  theobromine_gt: Float
  theobromine_gte: Float
  caffeine: Float
  caffeine_not: Float
  caffeine_in: [Float!]
  caffeine_not_in: [Float!]
  caffeine_lt: Float
  caffeine_lte: Float
  caffeine_gt: Float
  caffeine_gte: Float
  tannin: Float
  tannin_not: Float
  tannin_in: [Float!]
  tannin_not_in: [Float!]
  tannin_lt: Float
  tannin_lte: Float
  tannin_gt: Float
  tannin_gte: Float
  polyphenol: Float
  polyphenol_not: Float
  polyphenol_in: [Float!]
  polyphenol_not_in: [Float!]
  polyphenol_lt: Float
  polyphenol_lte: Float
  polyphenol_gt: Float
  polyphenol_gte: Float
  aceticAcid: Float
  aceticAcid_not: Float
  aceticAcid_in: [Float!]
  aceticAcid_not_in: [Float!]
  aceticAcid_lt: Float
  aceticAcid_lte: Float
  aceticAcid_gt: Float
  aceticAcid_gte: Float
  cookingOil: Float
  cookingOil_not: Float
  cookingOil_in: [Float!]
  cookingOil_not_in: [Float!]
  cookingOil_lt: Float
  cookingOil_lte: Float
  cookingOil_gt: Float
  cookingOil_gte: Float
  organicAcids: Float
  organicAcids_not: Float
  organicAcids_in: [Float!]
  organicAcids_not_in: [Float!]
  organicAcids_lt: Float
  organicAcids_lte: Float
  organicAcids_gt: Float
  organicAcids_gte: Float
  AND: [FoodWhereInput!]
  OR: [FoodWhereInput!]
  NOT: [FoodWhereInput!]
}

input FoodWhereUniqueInput {
  id: ID
}

scalar Long

type Mineral {
  sodium: Float
  potassium: Float
  calcium: Float
  magnesium: Float
  phosphorus: Float
  iron: Float
  zinc: Float
  copper: Float
  manganese: Float
  iodine: Float
  selenium: Float
  chromium: Float
  molybdenum: Float
}

type MineralConnection {
  pageInfo: PageInfo!
  edges: [MineralEdge]!
  aggregate: AggregateMineral!
}

input MineralCreateInput {
  sodium: Float
  potassium: Float
  calcium: Float
  magnesium: Float
  phosphorus: Float
  iron: Float
  zinc: Float
  copper: Float
  manganese: Float
  iodine: Float
  selenium: Float
  chromium: Float
  molybdenum: Float
}

input MineralCreateOneInput {
  create: MineralCreateInput
}

type MineralEdge {
  node: Mineral!
  cursor: String!
}

enum MineralOrderByInput {
  sodium_ASC
  sodium_DESC
  potassium_ASC
  potassium_DESC
  calcium_ASC
  calcium_DESC
  magnesium_ASC
  magnesium_DESC
  phosphorus_ASC
  phosphorus_DESC
  iron_ASC
  iron_DESC
  zinc_ASC
  zinc_DESC
  copper_ASC
  copper_DESC
  manganese_ASC
  manganese_DESC
  iodine_ASC
  iodine_DESC
  selenium_ASC
  selenium_DESC
  chromium_ASC
  chromium_DESC
  molybdenum_ASC
  molybdenum_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MineralPreviousValues {
  sodium: Float
  potassium: Float
  calcium: Float
  magnesium: Float
  phosphorus: Float
  iron: Float
  zinc: Float
  copper: Float
  manganese: Float
  iodine: Float
  selenium: Float
  chromium: Float
  molybdenum: Float
}

type MineralSubscriptionPayload {
  mutation: MutationType!
  node: Mineral
  updatedFields: [String!]
  previousValues: MineralPreviousValues
}

input MineralSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MineralWhereInput
  AND: [MineralSubscriptionWhereInput!]
  OR: [MineralSubscriptionWhereInput!]
  NOT: [MineralSubscriptionWhereInput!]
}

input MineralUpdateDataInput {
  sodium: Float
  potassium: Float
  calcium: Float
  magnesium: Float
  phosphorus: Float
  iron: Float
  zinc: Float
  copper: Float
  manganese: Float
  iodine: Float
  selenium: Float
  chromium: Float
  molybdenum: Float
}

input MineralUpdateManyMutationInput {
  sodium: Float
  potassium: Float
  calcium: Float
  magnesium: Float
  phosphorus: Float
  iron: Float
  zinc: Float
  copper: Float
  manganese: Float
  iodine: Float
  selenium: Float
  chromium: Float
  molybdenum: Float
}

input MineralUpdateOneRequiredInput {
  create: MineralCreateInput
  update: MineralUpdateDataInput
  upsert: MineralUpsertNestedInput
}

input MineralUpsertNestedInput {
  update: MineralUpdateDataInput!
  create: MineralCreateInput!
}

input MineralWhereInput {
  sodium: Float
  sodium_not: Float
  sodium_in: [Float!]
  sodium_not_in: [Float!]
  sodium_lt: Float
  sodium_lte: Float
  sodium_gt: Float
  sodium_gte: Float
  potassium: Float
  potassium_not: Float
  potassium_in: [Float!]
  potassium_not_in: [Float!]
  potassium_lt: Float
  potassium_lte: Float
  potassium_gt: Float
  potassium_gte: Float
  calcium: Float
  calcium_not: Float
  calcium_in: [Float!]
  calcium_not_in: [Float!]
  calcium_lt: Float
  calcium_lte: Float
  calcium_gt: Float
  calcium_gte: Float
  magnesium: Float
  magnesium_not: Float
  magnesium_in: [Float!]
  magnesium_not_in: [Float!]
  magnesium_lt: Float
  magnesium_lte: Float
  magnesium_gt: Float
  magnesium_gte: Float
  phosphorus: Float
  phosphorus_not: Float
  phosphorus_in: [Float!]
  phosphorus_not_in: [Float!]
  phosphorus_lt: Float
  phosphorus_lte: Float
  phosphorus_gt: Float
  phosphorus_gte: Float
  iron: Float
  iron_not: Float
  iron_in: [Float!]
  iron_not_in: [Float!]
  iron_lt: Float
  iron_lte: Float
  iron_gt: Float
  iron_gte: Float
  zinc: Float
  zinc_not: Float
  zinc_in: [Float!]
  zinc_not_in: [Float!]
  zinc_lt: Float
  zinc_lte: Float
  zinc_gt: Float
  zinc_gte: Float
  copper: Float
  copper_not: Float
  copper_in: [Float!]
  copper_not_in: [Float!]
  copper_lt: Float
  copper_lte: Float
  copper_gt: Float
  copper_gte: Float
  manganese: Float
  manganese_not: Float
  manganese_in: [Float!]
  manganese_not_in: [Float!]
  manganese_lt: Float
  manganese_lte: Float
  manganese_gt: Float
  manganese_gte: Float
  iodine: Float
  iodine_not: Float
  iodine_in: [Float!]
  iodine_not_in: [Float!]
  iodine_lt: Float
  iodine_lte: Float
  iodine_gt: Float
  iodine_gte: Float
  selenium: Float
  selenium_not: Float
  selenium_in: [Float!]
  selenium_not_in: [Float!]
  selenium_lt: Float
  selenium_lte: Float
  selenium_gt: Float
  selenium_gte: Float
  chromium: Float
  chromium_not: Float
  chromium_in: [Float!]
  chromium_not_in: [Float!]
  chromium_lt: Float
  chromium_lte: Float
  chromium_gt: Float
  chromium_gte: Float
  molybdenum: Float
  molybdenum_not: Float
  molybdenum_in: [Float!]
  molybdenum_not_in: [Float!]
  molybdenum_lt: Float
  molybdenum_lte: Float
  molybdenum_gt: Float
  molybdenum_gte: Float
  AND: [MineralWhereInput!]
  OR: [MineralWhereInput!]
  NOT: [MineralWhereInput!]
}

type Mutation {
  createFood(data: FoodCreateInput!): Food!
  updateFood(data: FoodUpdateInput!, where: FoodWhereUniqueInput!): Food
  updateManyFoods(data: FoodUpdateManyMutationInput!, where: FoodWhereInput): BatchPayload!
  upsertFood(where: FoodWhereUniqueInput!, create: FoodCreateInput!, update: FoodUpdateInput!): Food!
  deleteFood(where: FoodWhereUniqueInput!): Food
  deleteManyFoods(where: FoodWhereInput): BatchPayload!
  createMineral(data: MineralCreateInput!): Mineral!
  updateManyMinerals(data: MineralUpdateManyMutationInput!, where: MineralWhereInput): BatchPayload!
  deleteManyMinerals(where: MineralWhereInput): BatchPayload!
  createProximate(data: ProximateCreateInput!): Proximate!
  updateManyProximates(data: ProximateUpdateManyMutationInput!, where: ProximateWhereInput): BatchPayload!
  deleteManyProximates(where: ProximateWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVitamin(data: VitaminCreateInput!): Vitamin!
  updateManyVitamins(data: VitaminUpdateManyMutationInput!, where: VitaminWhereInput): BatchPayload!
  deleteManyVitamins(where: VitaminWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Proximate {
  water: Float
  protein: Float
  proteinByAminoAcid: Float
  lipid: Float
  triacylGlycerol: Float
  saturated: Float
  monoUnsaturated: Float
  polyUnsaturated: Float
  cholesterol: Float
  carbohydrateTotal: Float
  carbohydrateAvailable: Float
  dietaryFiberSoluble: Float
  dietaryFiberInsoluble: Float
  dietaryFiberTotal: Float
  ash: Float
}

type ProximateConnection {
  pageInfo: PageInfo!
  edges: [ProximateEdge]!
  aggregate: AggregateProximate!
}

input ProximateCreateInput {
  water: Float
  protein: Float
  proteinByAminoAcid: Float
  lipid: Float
  triacylGlycerol: Float
  saturated: Float
  monoUnsaturated: Float
  polyUnsaturated: Float
  cholesterol: Float
  carbohydrateTotal: Float
  carbohydrateAvailable: Float
  dietaryFiberSoluble: Float
  dietaryFiberInsoluble: Float
  dietaryFiberTotal: Float
  ash: Float
}

input ProximateCreateOneInput {
  create: ProximateCreateInput
}

type ProximateEdge {
  node: Proximate!
  cursor: String!
}

enum ProximateOrderByInput {
  water_ASC
  water_DESC
  protein_ASC
  protein_DESC
  proteinByAminoAcid_ASC
  proteinByAminoAcid_DESC
  lipid_ASC
  lipid_DESC
  triacylGlycerol_ASC
  triacylGlycerol_DESC
  saturated_ASC
  saturated_DESC
  monoUnsaturated_ASC
  monoUnsaturated_DESC
  polyUnsaturated_ASC
  polyUnsaturated_DESC
  cholesterol_ASC
  cholesterol_DESC
  carbohydrateTotal_ASC
  carbohydrateTotal_DESC
  carbohydrateAvailable_ASC
  carbohydrateAvailable_DESC
  dietaryFiberSoluble_ASC
  dietaryFiberSoluble_DESC
  dietaryFiberInsoluble_ASC
  dietaryFiberInsoluble_DESC
  dietaryFiberTotal_ASC
  dietaryFiberTotal_DESC
  ash_ASC
  ash_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProximatePreviousValues {
  water: Float
  protein: Float
  proteinByAminoAcid: Float
  lipid: Float
  triacylGlycerol: Float
  saturated: Float
  monoUnsaturated: Float
  polyUnsaturated: Float
  cholesterol: Float
  carbohydrateTotal: Float
  carbohydrateAvailable: Float
  dietaryFiberSoluble: Float
  dietaryFiberInsoluble: Float
  dietaryFiberTotal: Float
  ash: Float
}

type ProximateSubscriptionPayload {
  mutation: MutationType!
  node: Proximate
  updatedFields: [String!]
  previousValues: ProximatePreviousValues
}

input ProximateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProximateWhereInput
  AND: [ProximateSubscriptionWhereInput!]
  OR: [ProximateSubscriptionWhereInput!]
  NOT: [ProximateSubscriptionWhereInput!]
}

input ProximateUpdateDataInput {
  water: Float
  protein: Float
  proteinByAminoAcid: Float
  lipid: Float
  triacylGlycerol: Float
  saturated: Float
  monoUnsaturated: Float
  polyUnsaturated: Float
  cholesterol: Float
  carbohydrateTotal: Float
  carbohydrateAvailable: Float
  dietaryFiberSoluble: Float
  dietaryFiberInsoluble: Float
  dietaryFiberTotal: Float
  ash: Float
}

input ProximateUpdateManyMutationInput {
  water: Float
  protein: Float
  proteinByAminoAcid: Float
  lipid: Float
  triacylGlycerol: Float
  saturated: Float
  monoUnsaturated: Float
  polyUnsaturated: Float
  cholesterol: Float
  carbohydrateTotal: Float
  carbohydrateAvailable: Float
  dietaryFiberSoluble: Float
  dietaryFiberInsoluble: Float
  dietaryFiberTotal: Float
  ash: Float
}

input ProximateUpdateOneRequiredInput {
  create: ProximateCreateInput
  update: ProximateUpdateDataInput
  upsert: ProximateUpsertNestedInput
}

input ProximateUpsertNestedInput {
  update: ProximateUpdateDataInput!
  create: ProximateCreateInput!
}

input ProximateWhereInput {
  water: Float
  water_not: Float
  water_in: [Float!]
  water_not_in: [Float!]
  water_lt: Float
  water_lte: Float
  water_gt: Float
  water_gte: Float
  protein: Float
  protein_not: Float
  protein_in: [Float!]
  protein_not_in: [Float!]
  protein_lt: Float
  protein_lte: Float
  protein_gt: Float
  protein_gte: Float
  proteinByAminoAcid: Float
  proteinByAminoAcid_not: Float
  proteinByAminoAcid_in: [Float!]
  proteinByAminoAcid_not_in: [Float!]
  proteinByAminoAcid_lt: Float
  proteinByAminoAcid_lte: Float
  proteinByAminoAcid_gt: Float
  proteinByAminoAcid_gte: Float
  lipid: Float
  lipid_not: Float
  lipid_in: [Float!]
  lipid_not_in: [Float!]
  lipid_lt: Float
  lipid_lte: Float
  lipid_gt: Float
  lipid_gte: Float
  triacylGlycerol: Float
  triacylGlycerol_not: Float
  triacylGlycerol_in: [Float!]
  triacylGlycerol_not_in: [Float!]
  triacylGlycerol_lt: Float
  triacylGlycerol_lte: Float
  triacylGlycerol_gt: Float
  triacylGlycerol_gte: Float
  saturated: Float
  saturated_not: Float
  saturated_in: [Float!]
  saturated_not_in: [Float!]
  saturated_lt: Float
  saturated_lte: Float
  saturated_gt: Float
  saturated_gte: Float
  monoUnsaturated: Float
  monoUnsaturated_not: Float
  monoUnsaturated_in: [Float!]
  monoUnsaturated_not_in: [Float!]
  monoUnsaturated_lt: Float
  monoUnsaturated_lte: Float
  monoUnsaturated_gt: Float
  monoUnsaturated_gte: Float
  polyUnsaturated: Float
  polyUnsaturated_not: Float
  polyUnsaturated_in: [Float!]
  polyUnsaturated_not_in: [Float!]
  polyUnsaturated_lt: Float
  polyUnsaturated_lte: Float
  polyUnsaturated_gt: Float
  polyUnsaturated_gte: Float
  cholesterol: Float
  cholesterol_not: Float
  cholesterol_in: [Float!]
  cholesterol_not_in: [Float!]
  cholesterol_lt: Float
  cholesterol_lte: Float
  cholesterol_gt: Float
  cholesterol_gte: Float
  carbohydrateTotal: Float
  carbohydrateTotal_not: Float
  carbohydrateTotal_in: [Float!]
  carbohydrateTotal_not_in: [Float!]
  carbohydrateTotal_lt: Float
  carbohydrateTotal_lte: Float
  carbohydrateTotal_gt: Float
  carbohydrateTotal_gte: Float
  carbohydrateAvailable: Float
  carbohydrateAvailable_not: Float
  carbohydrateAvailable_in: [Float!]
  carbohydrateAvailable_not_in: [Float!]
  carbohydrateAvailable_lt: Float
  carbohydrateAvailable_lte: Float
  carbohydrateAvailable_gt: Float
  carbohydrateAvailable_gte: Float
  dietaryFiberSoluble: Float
  dietaryFiberSoluble_not: Float
  dietaryFiberSoluble_in: [Float!]
  dietaryFiberSoluble_not_in: [Float!]
  dietaryFiberSoluble_lt: Float
  dietaryFiberSoluble_lte: Float
  dietaryFiberSoluble_gt: Float
  dietaryFiberSoluble_gte: Float
  dietaryFiberInsoluble: Float
  dietaryFiberInsoluble_not: Float
  dietaryFiberInsoluble_in: [Float!]
  dietaryFiberInsoluble_not_in: [Float!]
  dietaryFiberInsoluble_lt: Float
  dietaryFiberInsoluble_lte: Float
  dietaryFiberInsoluble_gt: Float
  dietaryFiberInsoluble_gte: Float
  dietaryFiberTotal: Float
  dietaryFiberTotal_not: Float
  dietaryFiberTotal_in: [Float!]
  dietaryFiberTotal_not_in: [Float!]
  dietaryFiberTotal_lt: Float
  dietaryFiberTotal_lte: Float
  dietaryFiberTotal_gt: Float
  dietaryFiberTotal_gte: Float
  ash: Float
  ash_not: Float
  ash_in: [Float!]
  ash_not_in: [Float!]
  ash_lt: Float
  ash_lte: Float
  ash_gt: Float
  ash_gte: Float
  AND: [ProximateWhereInput!]
  OR: [ProximateWhereInput!]
  NOT: [ProximateWhereInput!]
}

type Query {
  food(where: FoodWhereUniqueInput!): Food
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food]!
  foodsConnection(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodConnection!
  minerals(where: MineralWhereInput, orderBy: MineralOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Mineral]!
  mineralsConnection(where: MineralWhereInput, orderBy: MineralOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MineralConnection!
  proximates(where: ProximateWhereInput, orderBy: ProximateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Proximate]!
  proximatesConnection(where: ProximateWhereInput, orderBy: ProximateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProximateConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vitamins(where: VitaminWhereInput, orderBy: VitaminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vitamin]!
  vitaminsConnection(where: VitaminWhereInput, orderBy: VitaminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VitaminConnection!
  node(id: ID!): Node
}

type Subscription {
  food(where: FoodSubscriptionWhereInput): FoodSubscriptionPayload
  mineral(where: MineralSubscriptionWhereInput): MineralSubscriptionPayload
  proximate(where: ProximateSubscriptionWhereInput): ProximateSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vitamin(where: VitaminSubscriptionWhereInput): VitaminSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type Vitamin {
  retinol: Float
  alphaCarotene: Float
  betaCarotene: Float
  betaCryptoxanthin: Float
  betaCaroteneEquivalents: Float
  retinolActivityEquivalents: Float
  vitaminD: Float
  alphaTocopherol: Float
  betaTocopherol: Float
  gammaTocopherol: Float
  deltaTocopherol: Float
  vitaminK: Float
  thiamin: Float
  riboflavin: Float
  niacin: Float
  vitaminB6: Float
  vitaminB12: Float
  folate: Float
  pantothenicAcid: Float
  biotin: Float
  ascorbicAcid: Float
}

type VitaminConnection {
  pageInfo: PageInfo!
  edges: [VitaminEdge]!
  aggregate: AggregateVitamin!
}

input VitaminCreateInput {
  retinol: Float
  alphaCarotene: Float
  betaCarotene: Float
  betaCryptoxanthin: Float
  betaCaroteneEquivalents: Float
  retinolActivityEquivalents: Float
  vitaminD: Float
  alphaTocopherol: Float
  betaTocopherol: Float
  gammaTocopherol: Float
  deltaTocopherol: Float
  vitaminK: Float
  thiamin: Float
  riboflavin: Float
  niacin: Float
  vitaminB6: Float
  vitaminB12: Float
  folate: Float
  pantothenicAcid: Float
  biotin: Float
  ascorbicAcid: Float
}

input VitaminCreateOneInput {
  create: VitaminCreateInput
}

type VitaminEdge {
  node: Vitamin!
  cursor: String!
}

enum VitaminOrderByInput {
  retinol_ASC
  retinol_DESC
  alphaCarotene_ASC
  alphaCarotene_DESC
  betaCarotene_ASC
  betaCarotene_DESC
  betaCryptoxanthin_ASC
  betaCryptoxanthin_DESC
  betaCaroteneEquivalents_ASC
  betaCaroteneEquivalents_DESC
  retinolActivityEquivalents_ASC
  retinolActivityEquivalents_DESC
  vitaminD_ASC
  vitaminD_DESC
  alphaTocopherol_ASC
  alphaTocopherol_DESC
  betaTocopherol_ASC
  betaTocopherol_DESC
  gammaTocopherol_ASC
  gammaTocopherol_DESC
  deltaTocopherol_ASC
  deltaTocopherol_DESC
  vitaminK_ASC
  vitaminK_DESC
  thiamin_ASC
  thiamin_DESC
  riboflavin_ASC
  riboflavin_DESC
  niacin_ASC
  niacin_DESC
  vitaminB6_ASC
  vitaminB6_DESC
  vitaminB12_ASC
  vitaminB12_DESC
  folate_ASC
  folate_DESC
  pantothenicAcid_ASC
  pantothenicAcid_DESC
  biotin_ASC
  biotin_DESC
  ascorbicAcid_ASC
  ascorbicAcid_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VitaminPreviousValues {
  retinol: Float
  alphaCarotene: Float
  betaCarotene: Float
  betaCryptoxanthin: Float
  betaCaroteneEquivalents: Float
  retinolActivityEquivalents: Float
  vitaminD: Float
  alphaTocopherol: Float
  betaTocopherol: Float
  gammaTocopherol: Float
  deltaTocopherol: Float
  vitaminK: Float
  thiamin: Float
  riboflavin: Float
  niacin: Float
  vitaminB6: Float
  vitaminB12: Float
  folate: Float
  pantothenicAcid: Float
  biotin: Float
  ascorbicAcid: Float
}

type VitaminSubscriptionPayload {
  mutation: MutationType!
  node: Vitamin
  updatedFields: [String!]
  previousValues: VitaminPreviousValues
}

input VitaminSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VitaminWhereInput
  AND: [VitaminSubscriptionWhereInput!]
  OR: [VitaminSubscriptionWhereInput!]
  NOT: [VitaminSubscriptionWhereInput!]
}

input VitaminUpdateDataInput {
  retinol: Float
  alphaCarotene: Float
  betaCarotene: Float
  betaCryptoxanthin: Float
  betaCaroteneEquivalents: Float
  retinolActivityEquivalents: Float
  vitaminD: Float
  alphaTocopherol: Float
  betaTocopherol: Float
  gammaTocopherol: Float
  deltaTocopherol: Float
  vitaminK: Float
  thiamin: Float
  riboflavin: Float
  niacin: Float
  vitaminB6: Float
  vitaminB12: Float
  folate: Float
  pantothenicAcid: Float
  biotin: Float
  ascorbicAcid: Float
}

input VitaminUpdateManyMutationInput {
  retinol: Float
  alphaCarotene: Float
  betaCarotene: Float
  betaCryptoxanthin: Float
  betaCaroteneEquivalents: Float
  retinolActivityEquivalents: Float
  vitaminD: Float
  alphaTocopherol: Float
  betaTocopherol: Float
  gammaTocopherol: Float
  deltaTocopherol: Float
  vitaminK: Float
  thiamin: Float
  riboflavin: Float
  niacin: Float
  vitaminB6: Float
  vitaminB12: Float
  folate: Float
  pantothenicAcid: Float
  biotin: Float
  ascorbicAcid: Float
}

input VitaminUpdateOneRequiredInput {
  create: VitaminCreateInput
  update: VitaminUpdateDataInput
  upsert: VitaminUpsertNestedInput
}

input VitaminUpsertNestedInput {
  update: VitaminUpdateDataInput!
  create: VitaminCreateInput!
}

input VitaminWhereInput {
  retinol: Float
  retinol_not: Float
  retinol_in: [Float!]
  retinol_not_in: [Float!]
  retinol_lt: Float
  retinol_lte: Float
  retinol_gt: Float
  retinol_gte: Float
  alphaCarotene: Float
  alphaCarotene_not: Float
  alphaCarotene_in: [Float!]
  alphaCarotene_not_in: [Float!]
  alphaCarotene_lt: Float
  alphaCarotene_lte: Float
  alphaCarotene_gt: Float
  alphaCarotene_gte: Float
  betaCarotene: Float
  betaCarotene_not: Float
  betaCarotene_in: [Float!]
  betaCarotene_not_in: [Float!]
  betaCarotene_lt: Float
  betaCarotene_lte: Float
  betaCarotene_gt: Float
  betaCarotene_gte: Float
  betaCryptoxanthin: Float
  betaCryptoxanthin_not: Float
  betaCryptoxanthin_in: [Float!]
  betaCryptoxanthin_not_in: [Float!]
  betaCryptoxanthin_lt: Float
  betaCryptoxanthin_lte: Float
  betaCryptoxanthin_gt: Float
  betaCryptoxanthin_gte: Float
  betaCaroteneEquivalents: Float
  betaCaroteneEquivalents_not: Float
  betaCaroteneEquivalents_in: [Float!]
  betaCaroteneEquivalents_not_in: [Float!]
  betaCaroteneEquivalents_lt: Float
  betaCaroteneEquivalents_lte: Float
  betaCaroteneEquivalents_gt: Float
  betaCaroteneEquivalents_gte: Float
  retinolActivityEquivalents: Float
  retinolActivityEquivalents_not: Float
  retinolActivityEquivalents_in: [Float!]
  retinolActivityEquivalents_not_in: [Float!]
  retinolActivityEquivalents_lt: Float
  retinolActivityEquivalents_lte: Float
  retinolActivityEquivalents_gt: Float
  retinolActivityEquivalents_gte: Float
  vitaminD: Float
  vitaminD_not: Float
  vitaminD_in: [Float!]
  vitaminD_not_in: [Float!]
  vitaminD_lt: Float
  vitaminD_lte: Float
  vitaminD_gt: Float
  vitaminD_gte: Float
  alphaTocopherol: Float
  alphaTocopherol_not: Float
  alphaTocopherol_in: [Float!]
  alphaTocopherol_not_in: [Float!]
  alphaTocopherol_lt: Float
  alphaTocopherol_lte: Float
  alphaTocopherol_gt: Float
  alphaTocopherol_gte: Float
  betaTocopherol: Float
  betaTocopherol_not: Float
  betaTocopherol_in: [Float!]
  betaTocopherol_not_in: [Float!]
  betaTocopherol_lt: Float
  betaTocopherol_lte: Float
  betaTocopherol_gt: Float
  betaTocopherol_gte: Float
  gammaTocopherol: Float
  gammaTocopherol_not: Float
  gammaTocopherol_in: [Float!]
  gammaTocopherol_not_in: [Float!]
  gammaTocopherol_lt: Float
  gammaTocopherol_lte: Float
  gammaTocopherol_gt: Float
  gammaTocopherol_gte: Float
  deltaTocopherol: Float
  deltaTocopherol_not: Float
  deltaTocopherol_in: [Float!]
  deltaTocopherol_not_in: [Float!]
  deltaTocopherol_lt: Float
  deltaTocopherol_lte: Float
  deltaTocopherol_gt: Float
  deltaTocopherol_gte: Float
  vitaminK: Float
  vitaminK_not: Float
  vitaminK_in: [Float!]
  vitaminK_not_in: [Float!]
  vitaminK_lt: Float
  vitaminK_lte: Float
  vitaminK_gt: Float
  vitaminK_gte: Float
  thiamin: Float
  thiamin_not: Float
  thiamin_in: [Float!]
  thiamin_not_in: [Float!]
  thiamin_lt: Float
  thiamin_lte: Float
  thiamin_gt: Float
  thiamin_gte: Float
  riboflavin: Float
  riboflavin_not: Float
  riboflavin_in: [Float!]
  riboflavin_not_in: [Float!]
  riboflavin_lt: Float
  riboflavin_lte: Float
  riboflavin_gt: Float
  riboflavin_gte: Float
  niacin: Float
  niacin_not: Float
  niacin_in: [Float!]
  niacin_not_in: [Float!]
  niacin_lt: Float
  niacin_lte: Float
  niacin_gt: Float
  niacin_gte: Float
  vitaminB6: Float
  vitaminB6_not: Float
  vitaminB6_in: [Float!]
  vitaminB6_not_in: [Float!]
  vitaminB6_lt: Float
  vitaminB6_lte: Float
  vitaminB6_gt: Float
  vitaminB6_gte: Float
  vitaminB12: Float
  vitaminB12_not: Float
  vitaminB12_in: [Float!]
  vitaminB12_not_in: [Float!]
  vitaminB12_lt: Float
  vitaminB12_lte: Float
  vitaminB12_gt: Float
  vitaminB12_gte: Float
  folate: Float
  folate_not: Float
  folate_in: [Float!]
  folate_not_in: [Float!]
  folate_lt: Float
  folate_lte: Float
  folate_gt: Float
  folate_gte: Float
  pantothenicAcid: Float
  pantothenicAcid_not: Float
  pantothenicAcid_in: [Float!]
  pantothenicAcid_not_in: [Float!]
  pantothenicAcid_lt: Float
  pantothenicAcid_lte: Float
  pantothenicAcid_gt: Float
  pantothenicAcid_gte: Float
  biotin: Float
  biotin_not: Float
  biotin_in: [Float!]
  biotin_not_in: [Float!]
  biotin_lt: Float
  biotin_lte: Float
  biotin_gt: Float
  biotin_gte: Float
  ascorbicAcid: Float
  ascorbicAcid_not: Float
  ascorbicAcid_in: [Float!]
  ascorbicAcid_not_in: [Float!]
  ascorbicAcid_lt: Float
  ascorbicAcid_lte: Float
  ascorbicAcid_gt: Float
  ascorbicAcid_gte: Float
  AND: [VitaminWhereInput!]
  OR: [VitaminWhereInput!]
  NOT: [VitaminWhereInput!]
}
`