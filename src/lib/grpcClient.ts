import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync('your.proto');
const grpcObj = grpc.loadPackageDefinition(packageDefinition) as any;

const userPackage = grpcObj.user as any;

export const client = new userPackage.UserService(
  'localhost:50051',
  grpc.credentials.createInsecure(),
);
