import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Home = () => {
    const navigate = useNavigation()
    return (
        <ScrollView style={styles.container}>
        <View >
            {/* header text */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Trò chơi</Text>
                <FontAwesome style={styles.userIcon} name='user-circle' size={30} color="#fff" />
            </View>
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
            <View style={styles.contentContainer}>
                <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}>
                    <View style={styles.gameCard}>
                        <Text style={styles.availableText}>Hiện có sẵn</Text>
                        <Text style={styles.gameTitle}>GenSin Impact</Text>
                        <Text style={styles.gameDescription}>Tướng 5 sao hot nhất hiện nay</Text>
                        <Image 
                            style={styles.gameImage} 
                            resizeMode="cover"  
                            source={require('../asset/game11.jpg')}
                        />
                    </View>
                    <View style={styles.gameCard}>
                        <Text style={styles.availableText}>Hiện có sẵn</Text>
                        <Text style={styles.gameTitle}>GenSin Impact</Text>
                        <Text style={styles.gameDescription}>Tướng 5 sao hot nhất hiện nay</Text>
                        <Image 
                            style={styles.gameImage} 
                            resizeMode="cover"  
                            source={require('../asset/game12.jpg')}
                        />
                    </View>
                    <View style={styles.gameCard}>
                        <Text style={styles.availableText}>Hiện có sẵn</Text>
                        <Text style={styles.gameTitle}>GenSin Impact</Text>
                        <Text style={styles.gameDescription}>Tướng 5 sao hot nhất hiện nay</Text>
                        <Image 
                            style={styles.gameImage} 
                            resizeMode="cover"  
                            source={require('../asset/game13.jpg')}
                        />
                    </View>
                    <View style={styles.gameCard}>
                        <Text style={styles.availableText}>Hiện có sẵn</Text>
                        <Text style={styles.gameTitle}>GenSin Impact</Text>
                        <Text style={styles.gameDescription}>Tướng 5 sao hot nhất hiện nay</Text>
                        <Image 
                            style={styles.gameImage} 
                            resizeMode="cover"  
                            source={require('../asset/game14.jpg')}
                        />
                    </View>
                    <View style={styles.gameCard}>
                        <Text style={styles.availableText}>Hiện có sẵn</Text>
                        <Text style={styles.gameTitle}>GenSin Impact</Text>
                        <Text style={styles.gameDescription}>Tướng 5 sao hot nhất hiện nay</Text>
                        <Image 
                            style={styles.gameImage} 
                            resizeMode="cover"  
                            source={require('../asset/game15.jpg')}
                        />
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
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>Xem tất cả</Text>
                    </TouchableOpacity>
                        
                   
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
        paddingTop: 5
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: 20,   
        marginBottom: 15
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
        color: '#fff'
    },
    userIcon: {
        marginLeft: 'auto'
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
        marginHorizontal: 20,
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
        marginBottom: 10
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

export default Home