targetScope = 'subscription'

@minLength(3)
@maxLength(11)
param name string

param location string = deployment().location

resource sharedRG 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rgrendoo-${name}'
  location: location
}

module storageModule './storage-account.bicep' = {
  name: 'storageAccountDeploy'
  scope: sharedRG
  params: {
    name: 'strendoo${uniqueString(sharedRG.id)}'
    location: location
  }
}

module containerRegistryModule './container-registry.bicep' = {
  name: 'containerRegistryDeploy'
  scope: sharedRG
  params: {
    name: 'acrrendoo${uniqueString(sharedRG.id)}'
    location: location
  }
}

output storageAccountName string = storageModule.outputs.storageAccountName
output storageAccountId string = storageModule.outputs.storageAccountId
output containerRegistryLoginServer string = containerRegistryModule.outputs.loginServer
output containerRegistryName string = containerRegistryModule.outputs.name