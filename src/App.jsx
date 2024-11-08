import React from 'react'
import './App.css'
import config from './config/config'

const App = () => {

  const {appwriteUrl, appwriteProjectId, appwriteDatabaseId, appwriteCollectionId, appwriteBucketId} = config

  console.log(appwriteUrl)
  console.log(appwriteProjectId)
  console.log(appwriteDatabaseId)
  console.log(appwriteCollectionId)
  console.log(appwriteBucketId)

  return (
    <div>App</div>
  )
}

export default App