# Connexion à votre compte Azure
Connect-AzAccount

# Définition des variables
$resourceGroupName = "myResourceGroup"
$location = "westeurope"
$storageAccountName = "mystorageaccount"

# Création du groupe de ressources
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Création du compte de stockage
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS