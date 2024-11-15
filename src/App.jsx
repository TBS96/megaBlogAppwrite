import React from 'react'
import './App.css'
import conf from './conf/conf'

const App = () => {

  const {appwriteUrl, appwriteProjectId, appwriteDatabaseId, appwriteCollectionId, appwriteBucketId} = conf

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