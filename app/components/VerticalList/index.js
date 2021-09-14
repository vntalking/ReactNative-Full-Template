import React from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Styles from './styles';
import AppColors from '../../config/colors';
import {wdp} from '../../lib/responsive';
import AppLang from '../../config/lang';

type Props = {
  data: any,
  style: any,
  emptyText: string,
  flatListProps: any,
  renderItem: void,
  renderItemSeparator?: void,
  loading?: boolean,
  loadMore?: boolean,
  onRefresh?: void,
  onLoadMore?: void,
};

type State = {
  startOffset: number,
};

export default class VerticalList extends React.Component<Props, State> {
  static defaultProps = {
    style: undefined,
    flatListProps: undefined,
    emptyText: undefined,
    loading: false,
    loadMore: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      startOffset: 0,
    };
  }

  render() {
    const {data, onRefresh, onLoadMore, flatListProps, renderItem} = this.props;
    return (
      <FlatList
        ref={list => {
          this.list = list;
        }}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              colors={[AppColors.primary]}
              tintColor={AppColors.primary}
              refreshing={false}
              onRefresh={onRefresh}
            />
          ) : null
        }
        keyExtractor={this._keyExtractor}
        renderItem={renderItem ?? this._renderItem}
        data={data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={this._renderLoadMoreIndicator()}
        ListEmptyComponent={this._renderListEmpty()}
        ItemSeparatorComponent={this._ItemSeparatorComponent}
        onScrollBeginDrag={this._checkBeginScroll}
        scrollEventThrottle={400}
        onScroll={onLoadMore ? this._doLoadMore : undefined}
        {...flatListProps}
        style={[Styles.list, flatListProps ? flatListProps.style : undefined]}
      />
    );
  }

  _ItemSeparatorComponent = params => {
    if (this.props.renderItemSeparator) {
      return this.props.renderItemSeparator(params);
    } else {
      return <View style={Styles.separator} />;
    }
  };

  _checkBeginScroll = e => {
    this.setState({
      startOffset: e.nativeEvent.contentOffset.y,
    });
  };

  _isScrollEnd = e => {
    const {layoutMeasurement, contentOffset, contentSize} = e.nativeEvent;
    const endOffset = contentOffset.y;
    if (endOffset <= this.state.startOffset) {
      return false;
    }
    const paddingToBottom = wdp(8);
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  _doLoadMore = e => {
    const canLoadMore = this._isScrollEnd(e);
    if (canLoadMore) {
      if (this.props.onLoadMore) {
        this.props.onLoadMore();
      }
    }
  };

  _keyExtractor = (item, index) => `${index}_${JSON.stringify(item)}`;

  _renderItem = ({item}) => {
    return <View data={item} />;
  };

  _renderLoadMoreIndicator = () => {
    if (!this.props.onLoadMore || !this.props.loadMore) {
      return null;
    }
    return (
      <View style={Styles.indicator}>
        {/* <ActivityIndicator color={AppColors.primary} size="large" /> */}
      </View>
    );
  };

  _renderListEmpty = () => {
    const {emptyText} = this.props;
    return (
      <View style={Styles.listEmpty}>
        <Text style={Styles.listEmptyText}>
          {emptyText ?? AppLang.common.emptyList}
        </Text>
      </View>
    );
  };
}
