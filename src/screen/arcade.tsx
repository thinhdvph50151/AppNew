
import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet } from 'react-native'
import { Modal } from 'react-native'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Arcade = () => {
    const [modalBanner, setModalBanner] = useState(false)
    return (
        
        <ScrollView >
        {/*  */}
        <Modal
        animationType='slide'
        transparent={true}
        visible={modalBanner}
        onRequestClose={()=>setModalBanner(false)}
        >
             <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.9)'}}>
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{position:'relative'}}>
            <Image 
                style={{
                    width:'100%',
                    height:500,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30
                }} 
                source={require('../asset/bannerninja.jpg')}
            />
            
            <TouchableOpacity 
                style={{
                    position:'absolute',
                    top:10,
                    right:10,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: 45,
                    height: 45,
                    borderRadius: 23,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} 
                onPress={()=>setModalBanner(false)}
            >
                <FontAwesome size={35} color={'#fff'} name='close'/>
            </TouchableOpacity>

            {/* Phần thông tin game */}
            <View style={{padding: 20}}>
                <Text style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: 10
                }}>
                    Ninja Warrior
                </Text>

                <Text style={{
                    fontSize: 16,
                    color: '#888',
                    marginBottom: 20
                }}>
                    Game hành động võ thuật hấp dẫn
                </Text>

                {/* Thống kê */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#1a1a1a',
                    padding: 15,
                    borderRadius: 15,
                    marginBottom: 20
                }}>
                    <View style={{alignItems: 'center'}}>
                        <FontAwesome5 name="star" size={24} color="#f0c14b"/>
                        <Text style={{color: '#fff', marginTop: 5}}>4.8</Text>
                        <Text style={{color: '#888', fontSize: 12}}>Đánh giá</Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <FontAwesome5 name="download" size={24} color="#4CAF50"/>
                        <Text style={{color: '#fff', marginTop: 5}}>1M+</Text>
                        <Text style={{color: '#888', fontSize: 12}}>Lượt tải</Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <FontAwesome5 name="gamepad" size={24} color="#2196F3"/>
                        <Text style={{color: '#fff', marginTop: 5}}>RPG</Text>
                        <Text style={{color: '#888', fontSize: 12}}>Thể loại</Text>
                    </View>
                </View>

                {/* Tính năng */}
                <View style={{
                    backgroundColor: '#1a1a1a',
                    padding: 15,
                    borderRadius: 15,
                    marginBottom: 20
                }}>
                    <Text style={{
                        color: '#f08dd5',
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 10
                    }}>
                        Tính năng nổi bật
                    </Text>
                    
                        <Text style={{color: '#fff', lineHeight: 24}}>
                            ✨ Đồ họa 3D tuyệt đẹp{'\n'}
                            🎮 Điều khiển mượt mà{'\n'}
                            ⚔️ PVP đối kháng hấp dẫn{'\n'}
                            🌟 Nhiều nhân vật để mở khóa{'\n'}
                            🏆 Hệ thống xếp hạng{'\n'}
                            🎯 Nhiệm vụ hàng ngày{'\n'}
                            💎 Vật phẩm độc đáo{'\n'}
                            🌍 Nhiều bản đồ khác nhau
                        </Text>
                </View>

                {/* Giá */}
                <View style={{
                    backgroundColor: '#1a1a1a',
                    padding: 15,
                    borderRadius: 15,
                    marginBottom: 20
                }}>
                    <Text style={{color: '#888'}}>Giá gói Premium</Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>
                        170.000đ/tháng
                    </Text>
                    <Text style={{color: '#4CAF50', marginTop: 5}}>
                        Dùng thử miễn phí 1 tháng đầu
                    </Text>
                </View>

                {/* Cấu hình yêu cầu */}
                <View style={{
                    backgroundColor: '#1a1a1a',
                    padding: 15,
                    borderRadius: 15,
                    marginBottom: 20
                }}>
                    <Text style={{
                        color: '#f08dd5',
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 10
                    }}>
                        Cấu hình yêu cầu
                    </Text>
                    
                    <Text style={{color: '#fff', lineHeight: 24}}>
                        📱 Android 6.0 trở lên{'\n'}
                        💾 Dung lượng trống: 2GB{'\n'}
                        🔄 RAM: 3GB trở lên{'\n'}
                        📶 Kết nối Internet ổn định
                    </Text>
                </View>

                {/* Đánh giá từ người chơi */}
                <View style={{
                    backgroundColor: '#1a1a1a',
                    padding: 15,
                    borderRadius: 15,
                    marginBottom: 20
                }}>
                    <Text style={{
                        color: '#f08dd5',
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 10
                    }}>
                        Đánh giá từ người chơi
                    </Text>
                    
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10
                    }}>
                        <FontAwesome5 name="star" size={20} color="#f0c14b"/>
                        <FontAwesome5 name="star" size={20} color="#f0c14b"/>
                        <FontAwesome5 name="star" size={20} color="#f0c14b"/>
                        <FontAwesome5 name="star" size={20} color="#f0c14b"/>
                        <FontAwesome5 name="star-half" size={20} color="#f0c14b"/>
                        <Text style={{color: '#fff', marginLeft: 10}}>4.8/5.0</Text>
                    </View>
                    
                    <Text style={{color: '#888', marginBottom: 10}}>
                        Dựa trên 100,000+ đánh giá
                    </Text>
                </View>

                {/* Nút tải */}
                <TouchableOpacity style={{
                    backgroundColor: '#f08dd5',
                    padding: 15,
                    borderRadius: 15,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30
                }}>
                    <FontAwesome5 
                        name="download" 
                        size={20} 
                        color="#fff" 
                        style={{marginRight: 10}}
                    />
                    <Text style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>
                        Tải Game Ngay
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
</View>
        </Modal>
           {/* header text */}
            <View style={styles.headerContainer}>
                
                    <Image style={{width:'100%',height:500}} source={require('../asset/bannerninja.jpg') }/>

                <FontAwesome style={styles.userIcon} name='user-circle' size={30} color="#fff" />
                <Text style={{position:'absolute',color:'#ccc',bottom:5,left:83}}>miễn phí 1 tháng sau đó là 170$/tháng</Text>
                <TouchableOpacity onPress={()=>setModalBanner(true)} style={{position:'absolute',backgroundColor:'#eda8d7',width:320,height:50,borderRadius:20,left:40,bottom:30}}>
                  <Text style={{fontSize:19,fontWeight:'800',color:'#000',textAlign:'center',marginTop:13}}>Chấp nhận dùng thử miễn phí</Text>
                </TouchableOpacity>
            </View>
        <View  style={styles.container}>
           
            <View style={styles.scrollViewContainer}>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.btnHeader}>
                            <FontAwesome name='compass' size={20} style={{ marginRight: 8 }} color="#ccc" />
                            <Text style={styles.btnHeaderText}>Thám hiểm</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnHeader}>
                            <FontAwesome name='bolt' size={20} style={{ marginRight: 8 }} color="#f0518c" />
                            <Text style={styles.btnHeaderText}>Hành động</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnHeader}>
                            <FontAwesome name='list' size={20} style={{ marginRight: 8 }} color="#e3c1cd" />
                            <Text style={styles.btnHeaderText}>Kinh dị</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnHeader}>
                            <FontAwesome name='coffee' size={20} style={{ marginRight: 8 }} color="#abe0c2" />
                            <Text style={styles.btnHeaderText}>Thư dãn</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnHeader}>
                            <FontAwesome name='smile-o' size={20} style={{ marginRight: 8 }} color="#9b75e6" />
                            <Text style={styles.btnHeaderText}>Vui vẻ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnHeader}>
                            <FontAwesome name='user-secret' size={20} style={{ marginRight: 8 }} color="#dce675" />
                            <Text style={styles.btnHeaderText}>Nhập vai</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnHeader}>
                            <FontAwesome name='plane' size={20} style={{ marginRight: 8 }} color="pink" />
                            <Text style={styles.btnHeaderText}>Du lịch</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            {/* Item 1*/}
            <View style={styles.bottomSection}> 
                <View style={styles.bottomHeader}>
                    <View>
                       
                        <Text style={styles.bottomTitle}>Các Game chúng tôi đang chơi</Text>
                        <Text style={styles.bottomSubtitle}>Lựa chọn của biên tập viên</Text>
                    </View>
                    <View>
                        <Text style={styles.viewAllText}>Xem tất cả</Text>
                    </View>
                </View>
                <View>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Free Fire</Text>
                                <Text style={styles.gameItemDesc}>Garena Game số 1 thế giới</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                        
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo2.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                     
                        
                    </ScrollView>
                </View>
            </View>
            <View style={{borderBottomWidth:4,borderColor:'#1a1a1a',marginHorizontal:20}}></View>
            {/* item 2 */}
            <View style={styles.bottomSection}> 
                <View style={styles.bottomHeader}>
                    <View>
                       
                        <Text style={styles.bottomTitle}>Các tựa Game không thể bỏ lỡ</Text>
                        <Text style={styles.bottomSubtitle}>Lựa chọn của biên tập viên</Text>
                    </View>
                    <View>
                        <Text style={styles.viewAllText}>Xem tất cả</Text>
                    </View>
                </View>
                <View>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo10.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Free Fire</Text>
                                <Text style={styles.gameItemDesc}>Garena Game số 1 thế giới</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                        
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo2.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                     
                        
                    </ScrollView>
                </View>
            </View>
              {/* Item 3*/}
            <View style={styles.bottomSection}> 
                <View style={styles.bottomHeader}>
                    <View>
                       
                        <Text style={styles.bottomTitle}>Các Game chúng tôi đang chơi</Text>
                        <Text style={styles.bottomSubtitle}>Lựa chọn của biên tập viên</Text>
                    </View>
                    <View>
                        <Text style={styles.viewAllText}>Xem tất cả</Text>
                    </View>
                </View>
                <View>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Free Fire</Text>
                                <Text style={styles.gameItemDesc}>Garena Game số 1 thế giới</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                        
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo2.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                     
                        
                    </ScrollView>
                </View>
            </View>
            <View style={{borderBottomWidth:4,borderColor:'#1a1a1a',marginHorizontal:20}}></View>
            
              {/* Item 4*/}
            <View style={styles.bottomSection}> 
                <View style={styles.bottomHeader}>
                    <View>
                       
                        <Text style={styles.bottomTitle}>Các Game chúng tôi đang chơi</Text>
                        <Text style={styles.bottomSubtitle}>Lựa chọn của biên tập viên</Text>
                    </View>
                    <View>
                        <Text style={styles.viewAllText}>Xem tất cả</Text>
                    </View>
                </View>
                <View>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Free Fire</Text>
                                <Text style={styles.gameItemDesc}>Garena Game số 1 thế giới</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                        
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo2.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                     
                        
                    </ScrollView>
                </View>
            </View>
            <View style={{borderBottomWidth:4,borderColor:'#1a1a1a',marginHorizontal:20}}></View>

              {/* Item 5*/}
            <View style={styles.bottomSection}> 
                <View style={styles.bottomHeader}>
                    <View>
                       
                        <Text style={styles.bottomTitle}>Các Game chúng tôi đang chơi</Text>
                        <Text style={styles.bottomSubtitle}>Lựa chọn của biên tập viên</Text>
                    </View>
                    <View>
                        <Text style={styles.viewAllText}>Xem tất cả</Text>
                    </View>
                </View>
                <View>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Free Fire</Text>
                                <Text style={styles.gameItemDesc}>Garena Game số 1 thế giới</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                        
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo2.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>
                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo6.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo1.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                          <View style={styles.gameListItem}>
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo3.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>
                             
                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo4.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View>

                             <View style={{flexDirection:'row',marginBottom:14,borderBottomWidth:4,borderColor:'#1a1a1a'}}>
                                <Image style={{width:60,height:60,borderRadius:10}} source={require('../asset/logo5.jpg')}/>
                            <View>
                                <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                                <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                            </View>
                            <FontAwesome style={{marginLeft:50,marginTop:12}} name='cloud-download' size={26} color="#fff" />
                             </View> 
                        </View>

                     
                        
                    </ScrollView>
                </View>
            </View>
            <View style={{borderBottomWidth:4,borderColor:'#1a1a1a',marginHorizontal:20}}></View>
            
            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    headerContainer: {
      position:'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
        color: '#fff'
    },
    userIcon: {
      position:'absolute',
      top:20,
      right:20
        
    },
    scrollViewContainer: {
        marginTop: 10
    },
    scrollContent: {
        paddingLeft: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnHeader: {
        justifyContent: 'center',
        backgroundColor: '#665b65',
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 5,
        paddingHorizontal: 15
    },
    btnHeaderText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },
    contentContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 5
    },
    gameCard: {
        width: 340,
        marginRight: 10
    },
    availableText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#f08dd5',
        marginBottom: 2
    },
    gameTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 2
    },
    gameDescription: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 5,
        opacity: 0.8
    },
    gameImage: {
        width: '100%',
        height: 230,
        borderRadius: 12,
        shadowColor: '#000'
    },
    bottomSection: {
        marginHorizontal: 0,
        marginTop: 5,
        marginBottom: 10
    },
    bottomHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft:14,
        marginTop:10
    },
    bottomTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
    bottomSubtitle: {
        fontSize: 14,
        color: '#888',
        marginTop: 2
    },
    viewAllText: {
        marginTop:-23,
        color: '#f08dd5',
        fontSize: 14,
        fontWeight: '600'
    },
    gameListItem: {
        
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginLeft:0,
        paddingLeft:30
    },
    gameItemTitle: {
        fontSize: 16,
        marginLeft:10,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4
    },
    gameItemDesc: {
       marginHorizontal:11,
        fontSize: 14,
        color: '#888'
    }
})

export default Arcade