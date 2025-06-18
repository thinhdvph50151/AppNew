import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { Image, ScrollView, TouchableOpacity, Text, View, StyleSheet, Modal, DrawerLayoutAndroid } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Today = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const navigation= useNavigation()
  const drawer = useRef<DrawerLayoutAndroid>(null)
  const navigationUser= ()=>{
    return ( 
      <View style={{flex:1    ,backgroundColor:'pink'}}>
        <Text style={{fontSize:24}}>User:abc.com</Text>
        <Text  style={{fontSize:24}}>Email:123@gmail.com</Text>
        <TouchableOpacity onPress={()=>drawer.current?.closeDrawer()}>
          <FontAwesome name='close' size={25}/>
        </TouchableOpacity>
      </View>

    )
  }
  return (
   <DrawerLayoutAndroid
    
   ref={drawer}
   drawerPosition='left'
   drawerWidth={300}
   renderNavigationView={navigationUser}
   >
     <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        {/* Header Text */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hôm Nay</Text>
          <TouchableOpacity onPress={()=>drawer.current?.openDrawer()}>
            <FontAwesome name='user-circle' size={30} color={'#fff'} style={styles.userIcon}/>
          </TouchableOpacity>
        </View>
        {/* Modal 1 */}
         <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image style={styles.modalBannerImage} source={require('../asset/banneTodo1.jpg')} />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <FontAwesome name='close' size={24} color={'#fff'} />
                        </TouchableOpacity>

                        <View style={styles.modalInfoContainer}>
                            <View style={styles.modalHeader}>
                                <Image style={styles.modalAppIcon} source={require('../asset/logo1.jpg')} />
                                <View style={styles.modalHeaderText}>
                                    <Text style={styles.modalTitle}>Free Fire</Text>
                                    <Text style={styles.modalSubtitle}>Garena Game số 1 thế giới</Text>
                                </View>
                                <TouchableOpacity style={styles.modalGetButton}>
                                    <Text style={styles.modalGetButtonText}>NHẬN</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView style={styles.modalScrollContent}>
                                <Text style={styles.modalSectionTitle}>Giới thiệu</Text>
                                <Text style={styles.modalDescription}>
                                    Free Fire là tựa game battle royale hàng đầu thế giới với đồ họa đẹp mắt và lối chơi hấp dẫn.
                                    Tham gia ngay để trải nghiệm những trận đấu gay cấn cùng hàng triệu người chơi khác.
                                </Text>

                                <View style={styles.modalFeatures}>
                                    <View style={styles.featureItem}>
                                        <FontAwesome5 name="star" size={20} color="#FFD700" />
                                        <Text style={styles.featureText}>Đồ họa tuyệt đẹp</Text>
                                    </View>
                                    <View style={styles.featureItem}>
                                        <FontAwesome5 name="gamepad" size={20} color="#FFD700" />
                                        <Text style={styles.featureText}>Gameplay đa dạng</Text>
                                    </View>
                                    <View style={styles.featureItem}>
                                        <FontAwesome5 name="users" size={20} color="#FFD700" />
                                        <Text style={styles.featureText}>Chơi cùng bạn bè</Text>
                                    </View>
                                </View>

                                <View style={styles.modalStats}>
                                    <View style={styles.statItem}>
                                        <Text style={styles.statNumber}>500M+</Text>
                                        <Text style={styles.statLabel}>Lượt tải</Text>
                                    </View>
                                    <View style={styles.statItem}>
                                        <Text style={styles.statNumber}>4.8★</Text>
                                        <Text style={styles.statLabel}>Đánh giá</Text>
                                    </View>
                                    <View style={styles.statItem}>
                                        <Text style={styles.statNumber}>#1</Text>
                                        <Text style={styles.statLabel}>Game hot</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
        {/* Modal 2 */}
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => setModalVisible2(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image style={styles.modalBannerImage} source={require('../asset/banneTodo2.jpg')} />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible2(false)}
                        >
                            <FontAwesome name='close' size={24} color={'#fff'} />
                        </TouchableOpacity>

                        <View style={styles.modalInfoContainer}>
                            <View style={styles.modalHeader}>
                                <Image style={styles.modalAppIcon} source={require('../asset/banneTodo2.jpg')} />
                                <View style={styles.modalHeaderText}>
                                    <Text style={styles.modalTitle}>Hello Kitty</Text>
                                    <Text style={styles.modalSubtitle}>Game dành cho trẻ em</Text>
                                </View>
                                <TouchableOpacity style={styles.modalGetButton}>
                                    <Text style={styles.modalGetButtonText}>NHẬN</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView style={styles.modalScrollContent}>
                                <Text style={styles.modalSectionTitle}>Giới thiệu</Text>
                                <Text style={styles.modalDescription}>
                                    Hello Kitty là một game dành cho trẻ em với đồ họa đẹp mắt và lối chơi hấp dẫn.
                                    Tham gia ngay để trải nghiệm những trận đấu gay cấn cùng hàng triệu người chơi khác.
                                </Text>

                                <View style={styles.modalFeatures}>
                                    <View style={styles.featureItem}>
                                        <FontAwesome5 name="star" size={20} color="#FFD700" />
                                        <Text style={styles.featureText}>Đồ họa tuyệt đẹp</Text>
                                    </View>
                                    <View style={styles.featureItem}>
                                        <FontAwesome5 name="gamepad" size={20} color="#FFD700" />
                                        <Text style={styles.featureText}>Gameplay đa dạng</Text>
                                    </View>
                                    <View style={styles.featureItem}>
                                        <FontAwesome5 name="users" size={20} color="#FFD700" />
                                        <Text style={styles.featureText}>Chơi cùng bạn bè</Text>
                                    </View>
                                </View>

                                <View style={styles.modalStats}>
                                    <View style={styles.statItem}>
                                        <Text style={styles.statNumber}>500M+</Text>
                                        <Text style={styles.statLabel}>Lượt tải</Text>
                                    </View>
                                    <View style={styles.statItem}>
                                        <Text style={styles.statNumber}>4.8★</Text>
                                        <Text style={styles.statLabel}>Đánh giá</Text>
                                    </View>
                                    <View style={styles.statItem}>
                                        <Text style={styles.statNumber}>#1</Text>
                                        <Text style={styles.statLabel}>Game hot</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
        {/* Item 1 */}
        <View style={styles.bannerContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={styles.bannerImage} source={require('../asset/banneTodo1.jpg')} />
          </TouchableOpacity>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.textImage}>Apple Ardeca</Text>
            <Text style={styles.textImage1}>Chơi game cùng Free Fire</Text>
            <Text style={styles.textImage}>Cùng chúng mình rực cháy nhé</Text>
          </View>
          
          <View style={styles.bannerBottomContainer}>
            <View style={styles.bannerOverlay} />
            <View style={styles.bannerContent}>
           
                <Image style={styles.appIcon} source={require('../asset/logo1.jpg')}/>
           
              <View style={styles.appInfo}>
                <Text style={styles.appTitle}>App Creade</Text>
                <Text style={styles.appDesc}>Free Fire no1 on the top 1 allways</Text>
              </View>
              <TouchableOpacity style={styles.getButton}>
                <Text style={styles.getButtonText}>Nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Games List Section */}
        <View style={styles.gamesSection}>
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

            {/* Game List */}
            <View style={styles.gameList}>
            
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo6.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo2.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo4.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo5.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo1.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
             
            </View>
          </View>
        </View>

        {/* Item 2 */}
        <View style={styles.bannerContainer}>
         <TouchableOpacity onPress={() => setModalVisible2(true)}>
           <Image  style={styles.bannerImage} source={require('../asset/banneTodo2.jpg')} />
          </TouchableOpacity>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.textImage1}>Hello kitty dễ thương</Text>
          
          </View>
          
          <View style={styles.bannerBottomContainer}>
            <View style={styles.bannerOverlay} />
            <View style={styles.bannerContent}>
              <Image style={styles.appIcon} source={require('../asset/banneTodo2.jpg')}/>
              <View style={styles.appInfo}>
                <Text style={styles.appTitle}>App Creade</Text>
                <Text style={styles.appDesc}>Free Fire no1 on the top 1 allways</Text>
              </View>
              <TouchableOpacity style={styles.getButton}>
                <Text style={styles.getButtonText}>Nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <View style={styles.bottomHeader}>
              <View>
                <Text style={styles.bottomTitle}>Các Game chúng tôi đang chơi</Text>
                <Text style={styles.bottomSubtitle}>Lựa chọn của biên tập viên</Text>
              </View>
              <Text style={styles.viewAllText}>Xem tất cả</Text>
            </View>
        </View>
            {/* Item 3 */}
        <View style={styles.bannerContainer}>
          <Image style={styles.bannerImage} source={require('../asset/banneTodo5.jpg')} />
          <View style={styles.bannerTextContainer}>
           
          </View>
          
          <View style={styles.bannerBottomContainer}>
            <View style={styles.bannerOverlay} />
            <View style={styles.bannerContent}>
              <Image style={styles.appIcon} source={require('../asset/logo10.jpg')}/>
              <View style={styles.appInfo}>
                <Text style={styles.appTitle}>App Creade</Text>
                <Text style={styles.appDesc}>Free Fire no1 on the top 1 allways</Text>
              </View>
              <TouchableOpacity style={styles.getButton}>
                <Text style={styles.getButtonText}>Nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

         {/* Games List Section */}
        <View style={styles.gamesSection}>
          <View style={styles.bottomSection}> 
            <View style={styles.bottomHeader}>
              <View>
                <Text style={styles.bottomTitle}>Các Game chúng tôi đang chơi</Text>
                <Text style={styles.bottomSubtitle}>Lựa chọn của biên tập viên</Text>
              </View>
              <Text style={styles.viewAllText}>Xem tất cả</Text>
            </View>

            {/* Game List */}
            <View style={styles.gameList}>
            
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo10.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo101.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo102.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo103.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
              <View style={styles.gameItem}>
                <View style={styles.gameItemContent}>
                  <Image style={styles.gameIcon} source={require('../asset/logo104.jpg')}/>
                  <View style={styles.gameTextContent}>
                    <Text style={styles.gameItemTitle}>Garena Mobie Liên Quân</Text>
                    <Text style={styles.gameItemDesc}>Garena Mobie Liên Quân</Text>
                  </View>
                  <FontAwesome style={styles.downloadIcon} name='cloud-download' size={26} color="#fff" />
                </View>
              </View>
             
            </View>
          </View>
        </View>

         {/* Item 3 */}
        <View style={styles.bannerContainer}>
          <Image style={styles.bannerImage} source={require('../asset/banneTodo4.jpg')} />
          
          <View style={styles.bannerBottomContainer}>
            <View style={styles.bannerOverlay} />
            <View style={styles.bannerContent}>
              <Image style={styles.appIcon} source={require('../asset/banneTodo.jpg')}/>
              <View style={styles.appInfo}>
                <Text style={styles.appTitle}>App Creade</Text>
                <Text style={styles.appDesc}>Free Fire no1 on the top 1 allways</Text>
              </View>
              <TouchableOpacity style={styles.getButton}>
                <Text style={styles.getButtonText}>Nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
   </DrawerLayoutAndroid>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  mainContent: {
    marginHorizontal: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: "center",
    marginTop: 25
  },
  headerTitle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: '800',
    marginLeft: 35
  },
  userIcon: {
    marginLeft: 170
  },
  bannerContainer: {
    position: 'relative',
    marginTop: 20
  },
    bannerImage: {
    width: '100%',
    height: 500,
    borderRadius: 20
  },
  bannerTextContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    alignItems: 'center'
  },
  textImage: {
    color: '#d4bfdb',
    fontSize: 20
  },
  textImage1: {
    color: 'pink',
    fontWeight: '700',
    fontSize: 30
  },
  bannerBottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#fff',
    opacity: 0.2
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    justifyContent: 'space-between'
  },
  appIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10
  },
  appInfo: {
    flex: 1,
    marginLeft: 10
  },
  appTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  appDesc: {
    color: '#fff',
    fontSize: 14
  },
  getButton: {
    backgroundColor: '#e68ed8',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20
  },
  getButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  gamesSection: {
    backgroundColor: '#000',
    marginTop: 20
  },
  bottomSection: {
    padding: 20
  },
  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  bottomTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5
  },
  bottomSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
  },
  viewAllText: {
    color: '#0A84FF',
    fontSize: 14,
    marginTop:20
  },
  gameList: {
    marginBottom: 15
  },
  gameItem: {
    marginBottom: 5
  },
  gameItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 4,
    borderColor: '#1a1a1a'
  },
  gameIcon: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  gameTextContent: {
    flex: 1,
    marginLeft: 15
  },
  gameItemTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5
  },
  gameItemDesc: {
    color: '#666',
    fontSize: 14
  },
  downloadIcon: {
    marginLeft: 15
  },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#000',
    },
    modalBannerImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalInfoContainer: {
        flex: 1,
        backgroundColor: '#000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -25,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    modalAppIcon: {
        width: 80,
        height: 80,
        borderRadius: 15,
    },
    modalHeaderText: {
        flex: 1,
        marginLeft: 15,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    modalSubtitle: {
        fontSize: 16,
        color: '#888',
    },
    modalGetButton: {
        backgroundColor: '#e68ed8',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 25,
    },
    modalGetButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalScrollContent: {
        padding: 20,
    },
    modalSectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 16,
        color: '#888',
        lineHeight: 24,
        marginBottom: 20,
    },
    modalFeatures: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    featureItem: {
        alignItems: 'center',
    },
    featureText: {
        color: '#fff',
        marginTop: 8,
        fontSize: 14,
    },
    modalStats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1a1a1a',
        borderRadius: 15,
        padding: 20,
        marginTop: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e68ed8',
    },
    statLabel: {
        color: '#888',
        marginTop: 5,
    },
});

export default Today