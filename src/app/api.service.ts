import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Connection } from  './connection';
import { Extraction } from  './extraction';
import { TransformConfig } from  './transformConfig';
import { FileConfig } from './fileConfig';
import { IngestionConfig } from  './ingestion-config';
import { Jobs } from './jobs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL:string =  'http://localhost:8083';
 
   // API_URL:string =  'http://localhost:8083';
 
 constructor(private  httpClient:  HttpClient) { }
 
 getECMSystems(){
     return  this.httpClient.get(`${this.API_URL}/ecmsystem`);
 }
 
 
 getIngestionECMSystems(){
     return  this.httpClient.get(`${this.API_URL}/ecmsystem`);
 }
 
 
 
 
 saveConnection(connection :Connection ){
     return  this.httpClient.post(`${this.API_URL}/saveConnection`,connection);
 }
 
 
 saveIngestionConfig(ingestionConfig : IngestionConfig ){
     return  this.httpClient.post(`${this.API_URL}/saveIngestionConfig`,ingestionConfig);
 }
 
 saveextraction(extraction :Extraction ){
     return  this.httpClient.post(`${this.API_URL}/saveExtractionConfig`,extraction);
 }
 
 
 getRepositories(){
     return  this.httpClient.get(`${this.API_URL}/documentum/getRepositories?type=f`);
 }
 
 
 findConnectionByType(type:string){
 //	return  this.httpClient.get(`${this.API_URL}/findConnectionByType?type=` +type);
   return  this.httpClient.get(`${this.API_URL}/getAllConnections`);
 }
 
 getConnections(){
     return  this.httpClient.get(`${this.API_URL}/getAllConnections`);
 }
 
 getObjectTypes(connectionName:string){
   return  this.httpClient.get(`${this.API_URL}/documentum/getObjectTypes?connectionName=` + connectionName);
 }
 
 getAttributeName(objectType:string){
   return  this.httpClient.get(`${this.API_URL}/documentum/getAttrNames?objectType=` + objectType);
 }
 
 updateDctmSession(objectType:string){
   return  this.httpClient.get(`${this.API_URL}/documentum/updateDctmSession?connectionName=` + objectType);
 }
 getDctmRegisterdtable(){
   return  this.httpClient.get(`${this.API_URL}/documentum/getDctmRegisterdtable/` );
 }
 
 getlocations(){
   return  this.httpClient.get(`${this.API_URL}/findAllRootFileSystem/` );
 }
 
 transform(transformConfig :TransformConfig){
   return  this.httpClient.post(`${this.API_URL}/saveTransformConfig/` ,transformConfig);
 }
 // Transformation
 getSourceDocType(){
   return  this.httpClient.get(`${this.API_URL}/documentum/getObjectTypes`);
 }
 
 getDestinationDocType(){
   return  this.httpClient.get(`${this.API_URL}/documentum/getObjectTypes` );
 }
 getDocumentumAttributes(){
   return  this.httpClient.get(`${this.API_URL}/documentum/getObjectTypes`);
 }
 
 getVaultAttributes(){
   return  this.httpClient.get(`${this.API_URL}/documentum/getObjectTypes`);
 }
 
 getSourceAttributes(){
   return  this.httpClient.get(`${this.API_URL}/documentum/getObjectTypes`);
 }
 
 getTargetAttributes(){
   return  this.httpClient.get(`${this.API_URL}/documentum/getObjectTypes`);
 }
 
 // File Transfer
 transferFiles(fileConfig :FileConfig){
   return  this.httpClient.post(`${this.API_URL}/saveFileConfig/` ,fileConfig);
                             
 }
 
 //Jobs
 
 executeJob(jobs:Jobs){
   return  this.httpClient.post(`${this.API_URL}/jobs/executeJob/` , jobs);
 }
 
 
 getJobs(jobType:string){
   return  this.httpClient.get(`${this.API_URL}/jobs/getJobs?jobType=` + jobType);
 }
 
 getAllJobs(){
   return  this.httpClient.get(`${this.API_URL}/jobs/getAllJobs`);
 }
 
 }