import React, { useEffect, useState } from 'react'
import { Text, TextInput, Button, FlatList, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

// MockAPI URL
const API = 'https://68469b457dbda7ee7aafa501.mockapi.io/posts'

// =================== ASYNC ACTIONS ===================
export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const res = await axios.get(API)
  return res.data
})

export const addPost = createAsyncThunk('posts/add', async (newPost) => {
  const res = await axios.post(API, newPost)
  return res.data
})

export const deletePost = createAsyncThunk('posts/delete', async (id: string) => {
  await axios.delete(`${API}/${id}`)
  return id
})

// =================== SLICE ===================
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false
        state.error = 'Lỗi khi lấy dữ liệu'
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.list = state.list.filter((item: any) => item.id !== action.payload)
      })
  }
})

const store = configureStore({
  reducer: {
    posts: postSlice.reducer
  }
})

// =================== UI COMPONENT ===================
const PostApp = () => {
  const dispatch = useDispatch()
  const { list, loading } = useSelector((state: any) => state.posts)
  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const handleAdd = () => {
    if (title.trim() !== '') {
      dispatch(addPost({ title }))
      setTitle('')
    }
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>📃 Danh sách bài viết</Text>

      <TextInput
        placeholder="Nhập tiêu đề bài viết"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <Button title="Thêm bài viết" onPress={handleAdd} />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
                marginVertical: 6,
                backgroundColor: '#f1f1f1',
                borderRadius: 6
              }}
            >
              <Text>{item.title}</Text>
              <TouchableOpacity onPress={() => dispatch(deletePost(item.id))}>
                <Text style={{ color: 'red' }}>🗑️ Xóa</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  )
}

// =================== EXPORT WRAPPED ===================
const App = () => (
  <Provider store={store}>
    <PostApp />
  </Provider>
)

export default App
