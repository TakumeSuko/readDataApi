import grpc, { GrpcObject } from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import path from 'path';

const packageDef = protoLoader.loadSync(
  path.resolve(process.cwd(), 'src/proto/user.proto'),
);

const grpcObj = grpc.loadPackageDefinition(packageDef) as GrpcObject;
const userPackage = grpcObj.user;

export const client = new userPackage.UserService(
  'localhost:50051',
  grpc.credentials.createInsecure(),
);
