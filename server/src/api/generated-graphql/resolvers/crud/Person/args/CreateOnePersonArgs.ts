import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PersonCreateInput } from '../../../inputs/PersonCreateInput';

@TypeGraphQL.ArgsType()
export class CreateOnePersonArgs {
  @TypeGraphQL.Field((_type) => PersonCreateInput, {
    nullable: false,
  })
  data!: PersonCreateInput;
}