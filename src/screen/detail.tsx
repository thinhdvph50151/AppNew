import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Alert, FlatList, Image, Modal, Text,
  TextInput, TouchableOpacity, View, StyleSheet
} from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

const Detail = () => {
  const [data, setData] = useState([])
  const apiUrl = 'https://68469b457dbda7ee7aafa501.mockapi.io/posts'
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [modal1, setModal1] = useState(false)

  const createPost = async () => {
    try {
      if (title.trim() === '') {
        Alert.alert('Nhập title')
        return
      }
      if (body.trim() === '') {
        Alert.alert('Nhập body')
        return
      }
      if (!imageUrl) {
        Alert.alert('Cần chọn ảnh')
        return
      }
      await axios.post(apiUrl, { title, body, image: imageUrl })
      Alert.alert('Thêm thành công', '', [
        { text: 'Xác nhận', onPress: () => setModal1(false) }
      ])
      setBody('')
      setTitle('')
      setImageUrl(null)
      getPosts()
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/${id}`)
      getPosts()
    } catch (error) {
      console.log(error)
    }
  }

  const confirmDelete = (id: number) => {
    Alert.alert('Xác nhận xoá', '', [
      { text: 'Huỷ' },
      { text: 'Xoá', onPress: () => deletePost(id), style: 'destructive' }
    ])
  }

  const getPosts = async () => {
    try {
      const res = await axios.get(apiUrl)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  const chooseImage = () => {
    launchImageLibrary(
      { mediaType: 'photo' },
      (response) => {
        if (response.didCancel) {
          console.log('Huỷ chọn ảnh')
        } else if (response.errorCode) {
          console.log('Lỗi', response.errorMessage)
        } else {
          const uri = response.assets?.[0]?.uri
          if (uri) {
            setImageUrl(uri)
          }
        }
      }
    )
  }

  const renderPost = ({ item }: any) => (
    <View style={styles.postCard}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <TouchableOpacity onPress={() => confirmDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Xoá</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModal1(true)} style={styles.addButton}>
        <Text style={styles.addButtonText}>Thêm bài viết</Text>
      </TouchableOpacity>

      <Modal visible={modal1} transparent={false} animationType='slide'>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModal1(false)} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Huỷ</Text>
          </TouchableOpacity>

          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            placeholder="Nhập tiêu đề"
          />

          <Text style={styles.inputLabel}>Body</Text>
          <TextInput
            value={body}
            onChangeText={setBody}
            style={styles.input}
            placeholder="Nhập nội dung"
          />

          <TouchableOpacity onPress={chooseImage} style={styles.imagePickerButton}>
            <Text style={styles.imagePickerText}>Chọn ảnh từ thư viện</Text>
          </TouchableOpacity>

          {imageUrl && (
            <Image source={{ uri: imageUrl }} style={styles.previewImage} />
          )}

          <TouchableOpacity onPress={createPost} style={styles.submitButton}>
            <Text style={styles.submitText}>Thêm bài post</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPost}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  addButton: {
    backgroundColor: '#2e86de',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  postCard: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    borderWidth: 1
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  postBody: {
    marginVertical: 6
  },
  postImage: {
    width: 200,
    
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal:70
  },
  deleteButton: {
    backgroundColor: '#ff6b6b',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center'
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  cancelButton: {
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  cancelText: {
    color: 'red',
    fontWeight: 'bold'
  },
  inputLabel: {
    fontWeight: '600',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10
  },
  imagePickerButton: {
    backgroundColor: '#74b9ff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10
  },
  imagePickerText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },
  submitButton: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default Detail
