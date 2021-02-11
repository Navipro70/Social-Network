import profileReducer, { actions, initialStateType } from './profile-reducer'
import { contactsType, Nullable, profileType } from '../Types/types'

const state: initialStateType = {
  // Test data
  posts: [
    { postText: 'Димоооон турутурурутуруру', id: 1 },
    { postText: 'Димоооон турутурурутуруру', id: 2 },
    { postText: 'Димоооон турутурурутуруру', id: 3 },
  ],
  profile: null as profileType | null,
  isProfileFetching: false,
  statusText: '',
}

describe('Post testing', () => {
  const newState = profileReducer(state, actions.addPost('Hello from test')) // New data
  it('Testing post text', () => {
    expect(newState.posts[3].postText).toBe('Hello from test')
  })
  it('Testing post Array length', () => {
    expect(newState.posts.length).toBe(4)
  })
  it('Testing post id', () => {
    expect(newState.posts[3].id).toBe(state.posts.length + 1)
  })
})

describe('Testing profile', () => {
  const contacts: contactsType = {
    github: 'github',
    vk: 'vk',
    facebook: 'facebook',
    instagram: 'instagram',
    twitter: 'twitter',
    website: 'website',
    youtube: 'youtube',
    mainLink: 'mainLink',
  }
  const profile: profileType = {
    aboutMe: "It's me^_^",
    userId: 2414,
    lookingForAJob: true,
    lookingForAJobDescription: 'Looking, yea',
    fullName: 'samurai',
    contacts: contacts,
    photos: { small: 'url', large: 'url' },
  }
  const newState = profileReducer(state, actions.setProfilePage(profile)) // New data

  it('Contacts testing', () => {
    if (newState.profile === null) return
    for (let i in contacts) {
      // @ts-ignore
      expect(newState.profile.contacts[i]).toBe(profile.contacts[i])
    }
  })
  it('About me testing', () => {
    if (newState.profile === null) return
    expect(newState.profile.aboutMe).toBe("It's me^_^")
  })
  it('userId testing', () => {
    if (newState.profile === null) return
    expect(newState.profile.userId).toBe(2414)
  })
  it('lookingForAJob testing', () => {
    if (newState.profile === null) return
    expect(newState.profile.lookingForAJob).toBe(true)
  })
  it('fullName testing', () => {
    if (newState.profile === null) return
    expect(newState.profile.fullName).toBe('samurai')
  })
  it('photos testing', () => {
    if (newState.profile === null) return
    expect(newState.profile.photos.small).toBe('url')
  })
})
